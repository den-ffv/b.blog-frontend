import "./BlogCard.scss";

import image from "/image.png";
import arrow from "/icon/arrow.svg";
import arrowRead from "/icon/arrow-read.svg";

function BlogCard() {
  return (
    <div className="blog-card">
    
      <div className="blog-card__img-conteiner">
        <img className="blog-card__img" src={image} alt="arrow" />
      </div>
      <div className="blog-card__content">
        <div>
          <p className="big-card__data">Sunday , 1 Jan 2023</p>
          <h2 className="blog-card__title">
            Css Grid
            <img src={arrowRead} alt="arrow" />
          </h2>
          <p className="big-card__text">
            The CSS Grid Layout Module offers a grid-based layout system.
          </p>
        </div>
        <div className="big-card__footer">
          <p className="big-card__tag">Design</p>
         
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
