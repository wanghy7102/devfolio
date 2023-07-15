const QuizArticle = () => {
  return (
    <article className="post">
      <div className="post__image-wrap">
        <div
          className="post__image"
          style={{
            backgroundImage: `url("img/online-quiz.jpg")`,
          }}
        ></div>
      </div>
      <div className="post__content-wrap">
        <div className="post__content">
          <h2 className="post__title">
            <a href="/project/wake-up">Wake up</a>
          </h2>
          <p className="post__subtitle">Stationery design</p>
          <p className="post__description">
            Personal has been designed to put your content first, with a stylish
            and minimal interface to make navigation easy.
          </p>
        </div>
      </div>
    </article>
  );
};

export default QuizArticle;
