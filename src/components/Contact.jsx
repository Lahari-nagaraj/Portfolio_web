import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    const {name, value}= e.target;

    setForm({ ...form, [name]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .send(
        "service_gn4yvmd",
        "template_aumu1oj",
        {
          from_name: form.name,
          to_name: "Lahari",
          from_email: form.email,
          to_email: "laharinagaraj9876@gmail.com",
          message: form.message,
        },
        "2tReB2IHln75L9Psw"
      )
      .then(
        () => {
          setloading(false);
          alert("Thank you! I'll get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setloading(false);
          console.error("Email send error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen gap-10 p-10">
      {/* Earth Model - Corrected Size & Position */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full md:w-[50%] h-[350px] md:h-[500px] flex justify-center"
      >
        <div className="w-[80%] md:w-full h-full"> {/* Ensures proper scaling */}
          <EarthCanvas />
        </div>
      </motion.div>

      {/* Contact Form - Stays Below on Small Screens */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full md:w-[50%] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch!</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
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
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
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
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
