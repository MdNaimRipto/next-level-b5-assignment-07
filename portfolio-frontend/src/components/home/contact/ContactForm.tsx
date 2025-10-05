import PositionAnimation from "@/components/animations/PositionAnimation";
import RotatingTextBlackButton from "@/components/buttons/RotatingTextBlackButton";
import React from "react";

const ContactForm = () => {
  return (
    <PositionAnimation position="x" initial={40} animate={0} delay={0.1}>
      <form className="w-full lg:w-[90%] mx-auto">
        <div className="flex flex-col gap-3 mb-6">
          <label className="italic text-base md:text-lg font-normal">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Jhon Doe"
            className="w-full focus:outline-none rounded-xl block p-3 shadow-inset-black bg-white/80 backdrop:blur-2xl placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <label className="italic text-base md:text-lg font-normal">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="jhonDoe@gmail.com"
            className="w-full focus:outline-none rounded-xl block p-3 shadow-inset-black bg-white/80 backdrop:blur-2xl placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <label className="italic text-base md:text-lg font-normal">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            className="w-full focus:outline-none rounded-xl block p-3 shadow-inset-black bg-white/80 backdrop:blur-2xl placeholder:italic"
            rows={4}
          />
        </div>
        <RotatingTextBlackButton
          title="Send message"
          style={{
            fontStyle: "italic",
          }}
        />
      </form>
    </PositionAnimation>
  );
};

export default ContactForm;
