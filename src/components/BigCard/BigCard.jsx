import { useState } from "react";
import { truncateText } from "../../config/textModification";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import image from "/image.png";
import arrow from "/icon/arrow.svg";
import "./BigCard.scss";

function BigCard() {
  const textOrig = `Not long ago I decided to improve the loading times of my website.
  It already loads pretty fast, but I knew there was still room for
  improvement and one of them was CSS loading. I will walk you through
  the process and show you how you can improve your load times as
  well. To see how CSS affects the load time of a webpage we first have to
  know...`;


  return (
    <div className="big-card">
      <div className="big-card__img-conteiner">
        <img className="big-card__img" src={image} alt="" />
      </div>
      <div className="big-card__content">
        <div>
          <p className="big-card__tag">
            Font-end • <span>1 Hour Ago</span>
          </p>
          <h1 className="big-card__title">
            Optimizing CSS for faster page loads
          </h1>
          <p className="big-card__text">{truncateText(textOrig, 300)}</p>
        </div>
        <div className="big-card__footer">
          <p className="big-card__read-time">3 Min Read</p>
          <p className="big-card__read-button">
            Read Full <img src={arrow} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
