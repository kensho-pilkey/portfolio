import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
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
      <span className={styles.sectionSubText}>Get in touch</span>
      <h3 className={styles.sectionHeadText}>Contact</h3>

      <div className="mt-12">
        <motion.div
          variants={slideIn("up", "tween", 0.2, 1)}
          className="bg-black-100 p-8 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:gap-8 gap-10">
            {/* Left Side: Contact Information */}
            <div className="flex-1">
              <h4 className="text-white font-medium text-[18px] mb-4">
                Connect with Me
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-white text-[24px]" />
                  <p className="text-secondary">pilkeykensho@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-white text-[24px]" />
                  <p className="text-secondary">+1 (910) 593-2679</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-white text-[24px]" />
                  <p className="text-secondary">Chapel Hill, NC</p>
                </div>
              </div>
            </div>

            {/* Right Side: Social Links */}
            <div className="flex-1">
              <h4 className="text-white font-medium text-[18px] mb-4">
                Follow Me
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/kensho-pilkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-secondary hover:text-white transition-colors duration-300"
                >
                  <FaGithub className="text-[24px]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/kensho-pilkey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-secondary hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin className="text-[24px]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-secondary hover:text-white transition-colors duration-300"
                >
                  <FaTwitter className="text-[24px]" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <p className="text-secondary mt-8">
            Feel free to reach out through any of these channels. I'm always
            excited to connect!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
