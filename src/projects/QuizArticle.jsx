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
            <a href="https://wanghy7102.github.io/online-quiz" target="_blank">
              Online Quiz
            </a>
          </h2>
          <p className="post__subtitle">A ReactJS project</p>
          <p className="post__description">
            Learners can take quizzes and assessments from anywhere and at any
            time.
          </p>
        </div>
      </div>
    </article>
  );
};

export default QuizArticle;
