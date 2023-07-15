const FormArticle = () => {
  return (
    <article className="post">
      <div className="post__image-wrap">
        <div
          className="post__image"
          style={{
            backgroundImage: `url("img/school-register.jpg")`,
          }}
        ></div>
      </div>
      <div className="post__content-wrap">
        <div className="post__content">
          <h2 className="post__title">
            <a href="/project/write-it-down">Write it down</a>
          </h2>
          <p className="post__subtitle">Branding design</p>
          <p className="post__description">
            Personal lets you show off your projects right here on the home
            page, with an engaging hover effect to grab the attention of your
            visitors.
          </p>
        </div>
      </div>
    </article>
  );
};

export default FormArticle;
