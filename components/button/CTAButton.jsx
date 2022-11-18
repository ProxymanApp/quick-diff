import React from 'react'

const CTAButton = ({ children, handleOnClick }) => {
    return (
      <button
        className="px-2.5 h-8 w-[120px] text-[14px] rounded text-white ctaBtn"
        onClick={handleOnClick}
      >
        {children}
      </button>
    );
  };

export default CTAButton