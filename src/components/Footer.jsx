import React from "react";

const title = "About ShopCart";
const desc =
  "Eduaid theme number one world class university in the world There are students studying always in this university for all time.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  { iconName: "icofont-google-map", text: "New York, USA." },
  { iconName: "icofont-phone", text: "+880 123 456 789" },
  { iconName: "icofont-envelope", text: "info@shopcart.com" },
];

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const ItemList = [
  { text: "All Products", link: "/shop" },
  { text: "Shop", link: "/shop" },
  { text: "Blog", link: "/blog" },
  { text: "About", link: "/about" },
  { text: "Policy", link: "#" },
  { text: "FAQs", link: "/about" },
];

const quickList = [
  { text: "Summer Sessions", link: "#" },
  { text: "Events", link: "#" },
  { text: "Gallery", link: "#" },
  { text: "Forums", link: "#" },
  { text: "Privacy Policy", link: "#" },
  { text: "Terms of Use", link: "#" },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Aminur Islam <a href="#">@ShopCart Greetings! #HTML_Template</a> Grab
        your item, 50% Big Sale Offer!
      </p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Somrat Islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your
        item, 50% Big Sale Offer!
      </p>
    ),
  },
];

const FooterSection = ({ title, items, renderItem }) => (
  <div className="col">
    <div className="footer-item">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="title">
            <h4>{title}</h4>
          </div>
          <div className="content">
            <ul className="lab-ul">
              {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
            <FooterSection
              title={title}
              items={addressList}
              renderItem={(item) => (
                <>
                  <i className={item.iconName}></i> {item.text}
                </>
              )}
            />
            <FooterSection
              title={quickTitle}
              items={quickList}
              renderItem={(item) => <a href={item.link}>{item.text}</a>}
            />
            <FooterSection
              title={ItemTitle}
              items={ItemList}
              renderItem={(item) => <a href={item.link}>{item.text}</a>}
            />
            <FooterSection
              title={tweetTitle}
              items={tweetList}
              renderItem={(item) => (
                <>
                  <i className={item.iconName}></i> {item.desc}
                </>
              )}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
