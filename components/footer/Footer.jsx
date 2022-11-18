import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="h-10 w-full fixed left-0 bottom-0 px-10 py-10 flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, hsl(210, 16.7%, 97.6%), hsl(206, 20.0%, 98.8%))",
        }}
      >
        <div className="flex flex-col text-sm text-gray-600">
          <div>
            🔐 <span className="underline">Your data is safe.</span>
          </div>
          <div>
            The diff is executed on your Web Browser.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
