import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  // Replace with your WhatsApp number (include country code without + sign)
  const phoneNumber = "1234567890"; // Change this to your actual WhatsApp number
  const message = "Hello! I am interested in your products.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-button-container" onClick={handleClick}>
      <div className="whatsapp-button">
        <svg
          viewBox="0 0 32 32"
          className="whatsapp-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.135-2.135c2.369 1.228 5.020 1.885 7.865 1.885 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.365c-2.381 0-4.713-0.637-6.772-1.843l-0.485-0.288-5.027 1.319 1.344-5.003-0.316-0.503c-1.316-2.097-2.012-4.509-2.012-6.983 0-7.391 6.010-13.402 13.402-13.402s13.402 6.010 13.402 13.402c0 7.391-6.010 13.402-13.402 13.402zM23.061 19.395c-0.377-0.189-2.229-1.099-2.574-1.225s-0.597-0.189-0.848 0.189c-0.251 0.377-0.974 1.225-1.194 1.477s-0.439 0.283-0.816 0.094c-0.377-0.189-1.592-0.587-3.032-1.871-1.12-0.999-1.877-2.233-2.097-2.611s-0.023-0.581 0.166-0.769c0.17-0.17 0.377-0.439 0.566-0.659s0.251-0.377 0.377-0.628c0.126-0.251 0.063-0.471-0.031-0.659s-0.848-2.044-1.162-2.799c-0.306-0.735-0.617-0.635-0.848-0.647-0.22-0.011-0.471-0.014-0.722-0.014s-0.659 0.094-1.005 0.471c-0.346 0.377-1.319 1.288-1.319 3.141s1.351 3.644 1.54 3.896c0.189 0.251 2.664 4.066 6.453 5.701 0.901 0.389 1.605 0.622 2.153 0.796 0.905 0.288 1.729 0.247 2.381 0.15 0.726-0.108 2.229-0.911 2.543-1.791s0.314-1.634 0.22-1.791c-0.094-0.157-0.346-0.251-0.722-0.439z"
          />
        </svg>
        <span className="whatsapp-tooltip">Chat with us!</span>
      </div>
    </div>
  );
};

export default WhatsAppButton;
