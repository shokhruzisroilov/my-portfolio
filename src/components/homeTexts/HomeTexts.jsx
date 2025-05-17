import "./HomeTexts.scss";
import { Link } from "react-router-dom";
import ExampleDoc from "../../public/cv_shohruz.pdf";

function HomeTexts() {
  return (
    <div className="home__text">
      <h2>welcome My Portfolio</h2>
      <div className="heading">
        Hello, i‘m Shokhruz <span>Frontend</span> Developer.
      </div>
      <h3>
        I am an enthusiastic, responsible, and hard-working frontend developer
        with experience in JavaScript,Reactjs,Node js
      </h3>
      <div className="buttons">
        <Link to="/contact" className="btn btn-left">
          Hire Me
        </Link>
        <a href={ExampleDoc} download="Shohruz Isroilov" target="_blank">
          <button className="btn btn-right">Download CV</button>
        </a>
      </div>
    </div>
  );
}

export default HomeTexts;
