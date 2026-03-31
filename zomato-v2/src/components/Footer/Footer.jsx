import React from "react";
import "./Footer.scss";
import App from "../../assets/images/App-Store.png";
import PlayStore from "../../assets/images/Google-Play.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const socialLinks = [
    { icon: <LinkedInIcon />, url: "https://www.linkedin.com/company/zomato" },
    { icon: <TwitterIcon />, url: "https://twitter.com/zomato" },
    { icon: <InstagramIcon />, url: "https://www.instagram.com/zomato" },
    { icon: <YouTubeIcon />, url: "https://www.youtube.com/zomato" },
    { icon: <FacebookIcon />, url: "https://www.facebook.com/zomato" },
  ];

  const footerLinks = {
    "ABOUT ZOMATO": [
      { label: "Who we are", url: "https://www.zomato.com/about" },
      { label: "Blog", url: "https://www.zomato.com/blog" },
      { label: "Work with us", url: "https://www.zomato.com/careers" },
      { label: "Investor Relations", url: "https://ir.zomato.com" },
      { label: "Report Fraud", url: "https://www.zomato.com/contact" },
      { label: "Contact Us", url: "https://www.zomato.com/contact" },
    ],
    ZOMAVERSE: [
      { label: "Zomato", url: "https://www.zomato.com" },
      { label: "Blinkit", url: "https://blinkit.com" },
      { label: "Feeding India", url: "https://feedingindia.org" },
      { label: "HyperPure", url: "https://hyperpure.com" },
      { label: "Zomaland", url: "https://zomaland.com" },
    ],
    "FOR RESTAURANTS": [
      { label: "Partner with Us", url: "/add-restaurant" },
      { label: "Apps For You", url: "https://www.zomato.com/restaurant-app" },
      { label: "Zomato for Work", url: "https://www.zomato.com/zomato-for-work" },
    ],
    "LEARN MORE": [
      { label: "Privacy", url: "https://www.zomato.com/privacy" },
      { label: "Security", url: "https://www.zomato.com/security" },
      { label: "Terms", url: "https://www.zomato.com/terms" },
      { label: "Sitemap", url: "https://www.zomato.com/sitemap" },
    ],
  };

  return (
    <div className="footer">
      <div className="top">
        <div className="top1">
          <h2>Zomato</h2>
          <div className="lang">
            <select>
              <option>India</option>
              <option>Australia</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>France</option>
              <option>Brazil</option>
              <option>South Africa</option>
            </select>
            <select>
              <option>English</option>
              <option>Hindi</option>
              <option>Polish</option>
            </select>
          </div>
        </div>

        <div className="bottom1">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div className="bottomContent" key={section}>
              <h4>{section}</h4>
              {links.map((link) => (
                link.url.startsWith("/") ? (
                  <a key={link.label} href={link.url}>{link.label}</a>
                ) : (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                )
              ))}
            </div>
          ))}

          <div className="bottomContent">
            <h4>SOCIAL LINKS</h4>
            <div className="links">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="app-store-links">
              <a href="https://play.google.com/store/apps/details?id=com.application.zomato" target="_blank" rel="noopener noreferrer">
                <img src={PlayStore} alt="Google Play" />
              </a>
              <a href="https://apps.apple.com/in/app/zomato/id434613896" target="_blank" rel="noopener noreferrer">
                <img src={App} alt="App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="bottom">
        <p>
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.
          All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
