import React, { useState } from "react";
import "./CTA.scss";
import Google from "../../assets/images/Google-Play.png";
import App from "../../assets/images/App-Store.png";
import Phone from "../../assets/images/Iphone.png";

const CTA = () => {
  const [useEmail, setUseEmail] = useState(true);
  const [value, setValue] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setSent(true);
    setValue("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="cta">
      <div className="left">
        <img src={Phone} alt="phone" />
      </div>
      <div className="right">
        <h1>Get the Zomato app</h1>
        <p>We will send you a link, open it on your phone to download the app</p>

        <div className="radio">
          <div className="radioBtn">
            <input
              type="radio"
              value="email"
              id="email"
              name="radio"
              defaultChecked
              onChange={() => { setUseEmail(true); setValue(""); }}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="radioBtn">
            <input
              type="radio"
              value="phone"
              id="phone"
              name="radio"
              onChange={() => { setUseEmail(false); setValue(""); }}
            />
            <label htmlFor="phone">Phone</label>
          </div>
        </div>

        <form className="input" onSubmit={handleSubmit}>
          <input
            type={useEmail ? "email" : "tel"}
            placeholder={useEmail ? "Enter your email" : "Enter your phone number"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">
            {sent ? "✓ Link Sent!" : "Share App Link"}
          </button>
        </form>

        {sent && (
          <p className="success-msg">App link sent successfully! Check your {useEmail ? "email" : "phone"}.</p>
        )}

        <span>Download app from</span>
        <div className="img">
          <a
            href="https://play.google.com/store/apps/details?id=com.application.zomato"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Google} alt="Google Play" />
          </a>
          <a
            href="https://apps.apple.com/in/app/zomato/id434613896"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={App} alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
