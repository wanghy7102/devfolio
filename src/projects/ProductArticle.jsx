const ProductArticle = () => {
  return (
    <article className="post">
      <div className="post__image-wrap">
        <div
          className="post__image"
          style={{
            backgroundImage: `url("https://d1qmdf3vop2l07.cloudfront.net/yellow-sage.cloudvent.net/hash-store/8696d297a15eac55b98284084c2760bb.jpg")`,
          }}
          data-cms-original-style="background-image: url(/images/demo/work-03.jpg)"
        ></div>
      </div>
      <div className="post__content-wrap">
        <div className="post__content">
          <h2 className="post__title">
            <a href="/project/edith-magazine">Edith magazine</a>
          </h2>
          <p className="post__subtitle">Print design</p>
          <p className="post__description">
            We’ve included everything you need to create engaging posts about
            your work, and show off your case studies in a beautiful way – check
            out a single post to see!
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductArticle;
