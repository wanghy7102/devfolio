import FormArticle from "./FormArticle";
import QuizArticle from "./QuizArticle";
import ProductArticle from "./ProductArticle";

const Listing = () => {
  return (
    <section className="listing">
      <div className="wrap">
        <FormArticle />
        <QuizArticle />
        <ProductArticle />
      </div>
    </section>
  );
};

export default Listing;
