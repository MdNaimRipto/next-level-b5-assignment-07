import React from "react";
import MoreContactOptions from "./MoreContactOptions";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative min-h-[650px] md:min-h-[880px] xl:min-h-[650px] flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-between md:px-14 absolute top-0 w-full">
        <div className="flex flex-col justify-between gap-4 md:gap-6">
          <h6 className="text-xs md:text-base">|| Awesome Portfolio</h6>
          <h2 className="text-2xl md:text-5xl">Contact Now</h2>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 w-full gap-6 md:gap-0 lg:w-[90%] items-center mt-12">
        <MoreContactOptions />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
