import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Over 300 applications are delivering GPT-3-powered search,
          conversation, text completion, and other advanced AI features through
          our API.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email"></input>
          <button type="button">Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1600 people requested access in the last 24 hours</p>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;
