const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-conetnt">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <p>Also Available On</p>
        <div className="shopping-section">
          <img src="/img/flipkart.png" alt="flipkart" />
          <img src="/img/amazon.png" alt="amazon" />
        </div>
      </div>
      <div className="hero-img">
        <img src="/img/shoe_image.png" alt="nike-shoe" />
      </div>
    </div>
  );
};

export default HeroSection;
