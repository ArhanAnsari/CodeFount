// src/app/terms/page.tsx

import React from "react";
import NavigationHeader from "@/components/NavigationHeader";

const TermsPage: React.FC = () => {
  return (
    <>
      <NavigationHeader />
      <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to CodeFount. By accessing or using our services, you agree to comply with these terms and conditions.
        </p>
        <h2>Use of Services</h2>
        <p>
          Our services are provided for lawful purposes only. You agree not to misuse or abuse our platform in any way.
        </p>
        <h2>Account Responsibility</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about our terms, please contact us at arhanansari2009@gmail.com.
        </p>
      </main>
    </>
  );
};

export default TermsPage;
