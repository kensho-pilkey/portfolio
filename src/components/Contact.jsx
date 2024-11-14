import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <h3 className={styles.sectionHeadText}>Contact</h3>

      <div className="mt-12">
        <div
          className="bg-black-100 p-8 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:gap-8 gap-10">
            {/* Left Side: Contact Information */}
            <div className="flex flex-col md:w-1/2">
              <h4 className="text-white font-medium text-[26px] mb-4 text-center md:text-left">
                Connect with Me
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-white text-[30px] min-w-[30px]" />
                  <p className="text-secondary">pilkeykensho@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-white text-[30px] min-w-[30px]" />
                  <p className="text-secondary">+1 (910) 593-2679</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-white text-[30px] min-w-[30px]" />
                  <p className="text-secondary">Chapel Hill, NC</p>
                </div>
              </div>
            </div>

            {/* Right Side: Message and Social Icons */}
            <div className="flex flex-col items-center md:w-1/2">
              <p className="text-secondary text-center mb-4">
                Feel free to reach out through any of these channels. I'm always
                excited to connect!
              </p>
              <div className="flex items-center justify-center gap-6 mt-4">
                <a
                  href="https://github.com/kensho-pilkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors duration-300"
                >
                  <FaGithub className="text-[50px]" />
                </a>
                <a
                  href="https://linkedin.com/in/kensho-pilkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin className="text-[50px]" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors duration-300"
                >
                  <FaTwitter className="text-[50px]" />
                </a>
                <a
                  href="https://www.youtube.com/yourchannel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors duration-300"
                >
                  <FaYoutube className="text-[50px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
