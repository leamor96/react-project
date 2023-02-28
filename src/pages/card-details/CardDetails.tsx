import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const CardDetails = () => {
  const nav = useNavigate();
  const { id } = useParams();
  // Use the useSelector hook to get the cards from the Redux store
  const cards = useAppSelector((state) => state.cards.cards);
  const card = cards.find((c) => c.id === id);

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="card p-5 m-5 mx-auto">
      <h1>{card.name}</h1>
      <h3>{card.tag}</h3>
      <hr />
      <p>{card.description}</p>
      <div>
        <button
          className="btn btn-info text-white"
          onClick={() => {
            nav(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
