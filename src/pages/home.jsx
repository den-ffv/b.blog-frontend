import "./styles/home.scss";
import { Link } from "react-router-dom";

import testImage from "/test-image.jpg";
import BlogCard from "../components/BlogCard/BlogCard";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__quote">
          <h1>
            {`"In our lives we not only live, but also create, draw, and write. And
        every day is a new opportunity to add a bright color, an interesting
        plot and a deeper meaning to your work."`}
          </h1>
          <a
            href="https://en.wikipedia.org/wiki/Taras_Shevchenko"
            rel="noreferrer"
            target="_blank"
          >
            Taras Shevchenko
          </a>
        </div>
        <Link to={"/auth/registration"} className="home__button">
          Join
        </Link>
      </div>

      <div className="home__popular-posts">
        <h2 className="title-second">Popular post</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 12,
          }}
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <button className="button-read-all">All post</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
