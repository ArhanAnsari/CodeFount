// src/app/privacy/page.tsx

import React from "react";
import NavigationHeader from "@/components/NavigationHeader";

const PrivacyPage: React.FC = () => {
  return (
    <>
      <NavigationHeader />
      <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Privacy Policy</h1>
      <p>
        At CodeFount, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect personal information that you provide when using our services, such as your name, email address, and payment details.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        Your information is used to improve our services, process transactions, and communicate with you about updates or offers.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions regarding our privacy policy, please contact us at arhanansari2009@gmail.com.
      </p>
    </main>
      );
      };
    </>

export default PrivacyPage;
