import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useState } from "react";
import { Card, editCard} from "../../features/cards/cardsSlice";

const EditCard = () => {
  //get the id from the url:
  const { id } = useParams();
  const nav = useNavigate();
  //get all the cards from the store:
  const cards = useAppSelector((state) => state.cards.cards);

  //dispatch actions:
  const dispatch = useAppDispatch();

  const cardToEdit = cards.find((c) => c.id === id);

  const [name, setName] = useState(cardToEdit?.name ?? "");
  const [description, setDescription] = useState(cardToEdit?.description ?? "");
  const [tag, setTag] = useState(cardToEdit?.tag ?? "");

  if (cardToEdit === undefined) {
    // 404 page is better:
    return <Navigate to="/" />;
  }

  return (
    <div className="d-flex card p-3 m-2">
      <h3>Edit</h3>
      <div className="label-input d-flex flex-column">
        <label htmlFor="name">Chore lable</label>
        <input
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
          placeholder="name"
        />
      </div>
      <br />
      <div className="label-input d-flex flex-column">
        <label htmlFor="description">Chore Description:</label>
        <input
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
          placeholder="description"
        />
      </div>
      <br />
      <label htmlFor="tag">Choose a Tag:</label>
      <select
        id="tag"
        value={tag}
        onChange={(e) => {
          setTag(e.currentTarget.value);
        }}
      >
        <option value="Daily">Daily</option>
        <option value="Monthly">Monthly</option>
        <option value="Seasonal">Seasonal</option>
        <option value="Enterior">Enterior</option>
        <option value="Exterior">Exterior</option>
      </select>
      <br />
      <button
        className="btn btn-info text-light"
        onClick={() => {
          //construct the edited Card object:
          const card: Card = {
            id: cardToEdit.id,
            tag: cardToEdit.tag,
            name: name,
            description: description,
            isFavorite:false,
          };
          dispatch(editCard(card));
          // send the user back to home page:
          nav(-1);
        }}
      >
        Finish Editing
      </button>
    </div>
  );
};

export default EditCard;
