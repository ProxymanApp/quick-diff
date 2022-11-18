import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="h-10 w-full fixed left-0 bottom-0 px-10 py-10 flex flex-row justify-between items-center text-sm text-gray-600"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, hsl(210, 16.7%, 97.6%), hsl(206, 20.0%, 98.8%))",
        }}
      >
        <div className="flex flex-col">
          <div>
            🔐 <span className="font-medium">Your data is safe.</span>
          </div>
          <div>The diff is executed on your Web Browser.</div>
        </div>
        <div className="flex flex-col">
          <p className="flex justify-end">
            © 2022 &nbsp;
            <a
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://proxyman.io"
            >
              Proxyman LLC
            </a>
            . All rights reserved.
          </p>
          <p>
            2055 Limestone Rd STE 200-C, Wilmington, DE, New Castle, US, 19808.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
