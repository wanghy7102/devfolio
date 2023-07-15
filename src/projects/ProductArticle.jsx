const ProductArticle = () => {
  return (
    <article className="post">
      <div className="post__image-wrap">
        <div
          className="post__image"
          style={{
            backgroundImage: `url("img/user-database.jpg")`,
          }}
          data-cms-original-style="background-image: url(/images/demo/work-03.jpg)"
        ></div>
      </div>
      <div className="post__content-wrap">
        <div className="post__content">
          <h2 className="post__title">
            <a
              href="https://wanghy7102.github.io/user-database"
              target="_blank"
              rel="noopener noreferrer"
            >
              User Database
            </a>
          </h2>
          <p className="post__subtitle">A ReactJS project</p>
          <p className="post__description">
            A database that stores information about users. It can include
            information such as name and email address. It can also include
            information about the user's posts, photos, and todo list.
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductArticle;
