const Hero = () => {
  return (
    <section className="hero hero--single">
      <div
        className="hero__image"
        style={{
          backgroundImage: `url("img/about.jpg")`,
        }}
      >
        <div className="hero__overlay"></div>
      </div>

      <div className="wrap">
        <h1>About me</h1>
        <p>
          I am a seasoned software engineer with over 10 years of experience in
          modern technology stacks including Java and .NET based web
          applications, relational databases and NoSQL, CI/CD pipelines, and
          cloud development and administration. I have experience in
          implementing both frontend and backend applications, developing
          scripts to automate repetitive tasks, and in my most recent job,
          devising data storage design that is scalable to accommodate 100+
          million users while meeting the data sovereignty requirements.
        </p>
      </div>
    </section>
  );
};

export default Hero;
