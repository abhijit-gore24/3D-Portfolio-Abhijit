import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form
          action="https://getform.io/f/alllvpja"
          method="POST"
          className="flex flex-col gap-4 mt-8"
        >
          {/* Name Input */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 rounded bg-gray-800 text-white"
            />
          </label>

          {/* Email Input */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 rounded bg-gray-800 text-white"
            />
          </label>

          {/* Message Input */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium">Message</span>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="p-3 rounded bg-gray-800 text-white"
              rows={5}
            />
          </label>

          {/* Hidden Honeypot Input */}
          <input
            type="hidden"
            name="_gotcha"
            style={{ display: "none !important" }}
          />

          {/* Checkbox Field */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="subscribe"
              value="yes"
              defaultChecked
              className="form-checkbox"
            />
            <label className="text-gray-200">Follow Me</label>
            <input type="hidden" name="subscribe" value="no" />
          </div>

          {/* Radio Buttons */}
          <div className="flex flex-col gap-2">
            <span className="text-gray-200 font-medium">Gender:</span>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                defaultChecked
                className="form-radio"
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-radio"
              />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="other"
                className="form-radio"
              />
              Other
            </label>
          </div>

          {/* Select Field */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium">Work Experience</span>
            <select
              name="work-experience"
              required
              className="p-3 rounded bg-gray-800 text-white"
            >
              <option value="one-year">0-1 years</option>
              <option value="one-five-years">1-5 years</option>
            </select>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary text-white font-bold py-2 px-6 rounded mt-4 transition-colors duration-200"
          >
            {loading ? "Sending..." : "Send  ❤️🚀🚀"}
          </button>

        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
