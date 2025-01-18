// src/app/terms/page.tsx

import React from "react";
import NavigationHeader from "@/components/NavigationHeader";

const ContactSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
    <p className="mt-2">
      If you have any questions about our terms, please contact us at{" "}
      <a href="mailto:arhanansari2009@gmail.com" className="text-blue-600 hover:underline">
        arhanansari2009@gmail.com
      </a>.
    </p>
  </section>
);

const TermsPage: React.FC = () => {
  return (
    <>
      <NavigationHeader />
      <main className="p-8 font-sans">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-4">Terms and Conditions</h1>
          <p className="mb-4 text-gray-700">
            Welcome to CodeFount. By accessing or using our services, you agree to comply with these terms and conditions.
          </p>
          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-2">Use of Services</h2>
            <p className="text-gray-600">
              Our services are provided for lawful purposes only. You agree not to misuse or abuse our platform in any way.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-2">Account Responsibility</h2>
            <p className="text-gray-600">
              You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </section>
          <ContactSection />
        </article>
      </main>
    </>
  );
};

export default TermsPage;
