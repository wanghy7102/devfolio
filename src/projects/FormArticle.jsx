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
            <a
              href="https://wanghy7102.github.io/school-register/"
              target="_blank"
              rel="noopener noreferrer"
            >
              School Register
            </a>
          </h2>
          <p className="post__subtitle">A ReactJS project</p>
          <p className="post__description">
            Displays a form that allows students and their families to register
            for school online.
          </p>
        </div>
      </div>
    </article>
  );
};

export default FormArticle;
