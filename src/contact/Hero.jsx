const Hero = () => {
  return (
    <section className="hero hero--single">
      <div
        className="hero__image"
        style={{
          backgroundImage: `url("img/contact.jpg")`,
        }}
      >
        <div className="hero__overlay"></div>
      </div>

      <div className="wrap">
        <h1>Contact</h1>
        <p>
          Personal comes with a built-in contact form that's free and easy to
          set up.
        </p>
      </div>
    </section>
  );
};

export default Hero;
