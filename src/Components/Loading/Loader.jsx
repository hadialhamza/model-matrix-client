import React from "react";
import "./LoadingPage.css"; // Create this CSS file

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-content">
        {/* Spinning Logo */}
        <div className="logo-spinner">
          <div className="logo-grid">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
            <span className="dot dot-4"></span>
            <span className="dot dot-5"></span>
            <span className="dot dot-6"></span>
            <span className="dot dot-7"></span>
            <span className="dot dot-8"></span>
            <span className="dot dot-9"></span>
          </div>
        </div>

        {/* Waving Text */}
        <div className="text-container">
          <span className="brand-text">
            ModelMatrix
            <span className="ai-text">AI</span>
          </span>
        </div>

        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
