import { useNavigate, useParams } from "react-router-dom";
import { chores } from "../../data/cards";

const CardDetails = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const chore = chores.find((c) => c.id === id);
  if (!chore) {
    return <div>Chore not found</div>;
  }

  return (
    <div className="card p-5 m-5 mx-auto">
      <h1>{chore.name}</h1>
      <h3>{chore.tag}</h3>
      <hr />
      <p>{chore.description}</p>
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
