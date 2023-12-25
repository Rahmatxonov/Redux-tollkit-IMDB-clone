import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__wrapper__content">
          <p className="hero__wrapper__content__title">Welcome </p>
          <p className="hero__wrapper__content__subTitle">Bye </p>
          <div className="searchInput">
            <input type="text" placeholder="Search movies..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
