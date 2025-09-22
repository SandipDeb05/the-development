import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t p-4">
      <div className="mx-auto text-center text-sm">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
