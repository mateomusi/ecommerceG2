import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-[#e0ffff]">Nuestra Tienda</p>
          <p className=" text-[#9e9e9e]">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className=" text-[#9e9e9e]">
            Tel: (415) 555-0132 <br /> Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-[#e0ffff]">
            Careers at Forever
          </p>
          <p className=" text-[#9e9e9e]">
            Learn more about our teams and job openings.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
