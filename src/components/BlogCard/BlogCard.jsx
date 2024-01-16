import "./BlogCard.scss";

import image from "/image.png";
import arrow from "/icon/arrow.svg";

function BlogCard() {
  return (
    <div className="blog-card">
      <div className="blog-card__img-conteiner">
        <img className="blog-card__img" src={image} alt="" />
      </div>
      <div className="blog-card__content">
        <div>
          <p className="big-card__tag">
            Font-end - <span>1 Hour Ago</span>
          </p>
          <h2 className="blog-card__title">Css Grid</h2>
          <p className="big-card__text">
            The CSS Grid Layout Module offers a grid-based layout system, with
            rows and columns, making it easier to design web pages without
            having to use floats and positioning.
          </p>
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

export default BlogCard;
