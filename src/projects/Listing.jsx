import FormArticle from "./FormArticle";
import QuizArticle from "./QuizArticle";

const Listing = () => {
  return (
    <section className="listing">
      <div className="wrap">
        <FormArticle />
        <QuizArticle />
      </div>
    </section>
  );
};

export default Listing;
