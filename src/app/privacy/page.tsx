// src/app/privacy/page.tsx

import React from "react";
import NavigationHeader from "@/components/NavigationHeader";

const ContactSection: React.FC = () => (
  <section>
    <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
    <p className="mt-2">
      If you have any questions regarding our privacy policy, please contact us at{" "}
      <a href="mailto:arhanansari2009@gmail.com" className="text-blue-600 hover:underline">
        arhanansari2009@gmail.com
      </a>.
    </p>
  </section>
);

const PrivacyPage: React.FC = () => {
  return (
    <>
      <NavigationHeader />
      <main className="p-8 font-sans">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
          <p className="mb-4 text-gray-700">
            At CodeFount, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
          </p>
          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-2">Information We Collect</h2>
            <p className="text-gray-600">
              We collect personal information that you provide when using our services, such as your name, email address, and payment details.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-medium mb-2">How We Use Your Information</h2>
            <p className="text-gray-600">
              Your information is used to improve our services, process transactions, and communicate with you about updates or offers.
            </p>
          </section>
          <ContactSection />
        </article>
      </main>
    </>
  );
};

export default PrivacyPage;
