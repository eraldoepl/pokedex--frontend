import notFoundImage from "../../assets/images/page_not_found.svg";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="notFound__header">page not found</h1>);
      <img className="notFound__image" src={notFoundImage} alt="Not found" />
    </div>
  );
};

export default NotFound;
