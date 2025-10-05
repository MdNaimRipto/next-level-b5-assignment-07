export const apiConfig = {
  baseUrl: "http://localhost:5000/v1.0.0/apis",
  admin: {
    login: "/admin/login",
    me: "/admin/me",
    logout: "/admin/logout",
  },
  blogs: {
    create: "/blogs/upload",
    getAll: "/blogs/getAll",
    getDetails: "/blogs/getDetails",
    update: "/blogs/update",
    delete: "/blogs/delete",
  },
  projects: {
    create: "/projects/upload",
    getAll: "/projects/getAll",
    update: "/projects/update",
    delete: "/projects/delete",
  },
};
