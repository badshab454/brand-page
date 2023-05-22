const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
          HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
          THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="shop">
            <a href="#">Shop Now</a>
          </button>

          <button className="category">
            <a href="#">Category</a>
          </button>
        </div>
        <p className="shop-paragraph">Also Available On</p>
        <div className="shopping-section">
          <a href="#">
            <img src="/img/flipkart.png" alt="flipkart" />
          </a>
          <a href="#">
            <img src="/img/amazon.png" alt="amazon" />
          </a>
        </div>
      </div>
      <div className="hero-img">
        <img src="/img/shoe_image.png" alt="nike-shoe" />
      </div>
    </div>
  );
};

export default HeroSection;
