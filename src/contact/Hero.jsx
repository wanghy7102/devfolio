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
          Thank you for visiting my website! If you have any questions or
          comments, please feel free to contact me using the form below. I will
          respond as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default Hero;
