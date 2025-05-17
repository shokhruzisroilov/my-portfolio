import "./Blog.scss";
import BlogsCardData from "../blogData";
import BlogArticle from "../components/blogArticle/BlogArticle";

function Blog() {
  return (
    <div className="blog__section">
      <div className="blog__container">
        <div className="blog">Blog Post</div>
        <div className="all__blogs">
          {BlogsCardData.map((item) => {
            return (
              <BlogArticle
                key={item.id}
                imgsrc={item.imgsrc}
                title={item.title}
                name={item.name}
                view={item.view}
              />
            );
          })}
        </div>
        <div className="subscribe__section">
          <div className="subscribe__container">
            <div className="text">
              <h3>Subscribe Now</h3>
              <h2>
                It will be useful <br /> for you
              </h2>
              <p>I'm glad it was useful to you😎</p>
            </div>
            <div className="form">
              <input type="email" placeholder="Enter your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
