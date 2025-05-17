import "./AboutInfo.scss";

function AboutInfo() {
  return (
    <div className="about__info">
      <div className="about__me">
        <h3>About Me</h3>
      </div>
      <h2>Shohruz Isroilov</h2>
      <p className="paragrf">
        I am an enthusiastic, responsible, and hard-working frontend developer
        with experience in JavaScript,Reactjs,Node js
      </p>
      <div className="info">
        <ul>
          <li>
            <h3>Birthday : </h3>
            <p> 20 September 2003</p>
          </li>
          <li>
            <h3>Website :</h3>
            <a
              href="https://shohruzisroilov.uz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>shohruzisroilov.vercel.app</p>
            </a>
          </li>
          <li>
            <h3>Phone :</h3>
            <p>+998940080473</p>
          </li>
          <li>
            <h3>Email :</h3>
            <p>isroilovshokhruz@gmail.com</p>
          </li>
          <li>
            <h3>Freelance :</h3>
            <p>Available</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutInfo;
