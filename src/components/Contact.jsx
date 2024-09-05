import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulating email sending
    setTimeout(() => {
      setLoading(false);
      setSubmitStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <>
      <span className={styles.sectionSubText}>Get in touch</span>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <div className="mt-12 flex flex-col-reverse gap-10 overflow-hidden lg:flex-row">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl flex items-center"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {submitStatus === "success" && (
            <div className="mt-4 bg-green-600 text-white p-4 rounded-lg">
              Message sent successfully!
            </div>
          )}
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-[0.25] bg-black-100 p-8 rounded-2xl"
        >
          <h4 className="text-white font-medium text-[18px] mb-4">Connect with Me</h4>
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

          <h4 className="text-white font-medium text-[18px] mt-8 mb-4">Follow Me</h4>
          <div className="flex flex-col gap-4">
            <a href="https://github.com/kensho-pilkey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondary hover:text-white transition-colors duration-300">
              <FaGithub className="text-[24px]" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/kensho-pilkey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondary hover:text-white transition-colors duration-300">
              <FaLinkedin className="text-[24px]" />
              <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondary hover:text-white transition-colors duration-300">
              <FaTwitter className="text-[24px]" />
              <span>Twitter</span>
            </a>
          </div>

          <p className="text-secondary mt-8 text-left">
            Feel free to reach out through any of these channels. I'm always excited to connect!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");