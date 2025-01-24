"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ValidationError, useForm } from "@formspree/react";
import NavigationHeader from "@/components/NavigationHeader";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mayzgjbd");
  const form = useRef<HTMLFormElement | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    const formElement = form.current;
    if (formElement) {
      setIsFormValid(formElement.checkValidity());
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oxjis4c", "template_5x9q6gc", form.current!, {
        publicKey: "7i7_YEAdQWQzN_UBZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <NavigationHeader />
      <div className="pt-16 flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Contact Us</h2>
          <div className="mt-8 p-8 rounded-md bg-gray-800 bg-opacity-75 w-96 max-w-full">
            {state.succeeded ? (
              <p className="text-gray-300 text-center">Thanks for your message!</p>
            ) : (
              <form ref={form} onSubmit={sendEmail} onChange={handleInputChange}>
                <label htmlFor="name" className="font-medium text-gray-300 block mb-1">
                  <span className="text-red-500">*</span> Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 p-3"
                />
                <label htmlFor="email" className="font-medium text-gray-300 block mb-1 mt-8">
                  <span className="text-red-500">*</span> Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 p-3"
                />
                <ValidationError className="mt-1 text-red-500" prefix="Email" field="email" errors={state.errors} />
                <label htmlFor="message" className="font-medium text-gray-300 block mb-1 mt-8">
                  <span className="text-red-500">*</span> Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 p-3"
                />
                <ValidationError className="mt-1 text-red-500" errors={state.errors} />
                <button
                  type="submit"
                  disabled={!isFormValid || state.submitting}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium shadow-lg ${
                    isFormValid
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-blue-500/20"
                      : "bg-gray-600 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
