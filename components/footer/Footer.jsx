import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="h-10 w-full fixed left-0 bottom-0 px-10 flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, hsl(210, 16.7%, 97.6%), hsl(206, 20.0%, 98.8%))",
        }}
      >
        <div className="text-xs text-gray-600">
          🔐 <span className="underline">Your data is safe.</span> The diff is executed on your Web Browser.
        </div>
      </footer>
    </>
  );
};

export default Footer;
