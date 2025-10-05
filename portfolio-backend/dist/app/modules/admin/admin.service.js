"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const admin_schema_1 = require("./admin.schema");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../../../config/config");
const jwt_utils_1 = require("../../../util/jwt/jwt.utils");
//* User Register
const userRegister = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload;
    const lowercaseEmail = email.toLocaleLowerCase();
    const isExistsUser = yield admin_schema_1.Users.findOne();
    if (isExistsUser) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, "Admin Already Exists. Cannot Create Another Account");
    }
    const hashedPassword = yield bcrypt_1.default.hash(payload.password, Number(config_1.envConfig.salt_round));
    yield admin_schema_1.Users.create(Object.assign(Object.assign({}, payload), { email: lowercaseEmail, password: hashedPassword }));
    return null;
});
//* User Login
const userLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const isExists = yield admin_schema_1.Users.findOne({ email: email });
    if (!isExists) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid Email Or Password");
    }
    const checkPassword = yield bcrypt_1.default.compare(password, isExists.password);
    if (!checkPassword) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid Email Or Password");
    }
    const jwtPayload = {
        email: isExists.email,
        id: isExists._id,
    };
    const accessToken = jwt_utils_1.jwtHelpers.createToken(jwtPayload, config_1.envConfig.jwt_access_secret, config_1.envConfig.jwt_access_expires_in);
    const refreshToken = jwt_utils_1.jwtHelpers.createToken(jwtPayload, config_1.envConfig.jwt_refresh_secret, config_1.envConfig.jwt_refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
const getAuthenticatedUserDetails = (accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, email } = jwt_utils_1.jwtHelpers.jwtVerify(accessToken, config_1.envConfig.jwt_access_secret);
    const result = yield admin_schema_1.Users.findOne({
        _id: id,
        email: email.toLocaleUpperCase(),
    }).select("-password");
    return result;
});
const logout = (res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });
    return null;
});
exports.AdminService = {
    userRegister,
    userLogin,
    getAuthenticatedUserDetails,
    logout,
};
