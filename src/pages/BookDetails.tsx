import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Here is book details Page{id}</h1>
    </div>
  );
};

export default BookDetails;
