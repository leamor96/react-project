import { Card, deleteCard } from "../../features/cards/cardsSlice"; 
import { BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import Swal from "sweetalert2";
import { toggleFavorite } from "../../features/cards/cardsSlice";
import {BiTask, BiTaskX} from 'react-icons/bi'
import "./CardItem.css"

const CardItem = (props: Card) => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="card p-5 m-2 card-size">
      <button
        style={{ position: "absolute", top: "10px", right: "10px" }}
        className="border-0 bg-transparent"
        onClick={() => dispatch(toggleFavorite(props.id))}
      >
        {!props.isFavorite && <BiTaskX style={{ fontSize: "30px" }} />}
        {props.isFavorite && <BiTask style={{ fontSize: "30px" }} />}
      </button>
      <div style={{ position: "relative", height: "100%" }}>
        <h2 className="cardTitle">{props.name}</h2>
        <br />
      </div>
      <div style={{ position: "absolute", bottom: 20, width: "100%" }}>
        <button
          className="btn btn-secondary m-1"
          onClick={() => {
            nav(`/chores/cards/edit/${props.id}`);
          }}
        >
          <BsPencil />
        </button>

        <button
          className="btn btn-dark m-1"
          onClick={() => {
            Swal.fire({
              title: "Are you sure you want to delete this?",
              showDenyButton: true,
              confirmButtonText: "Yes",
              denyButtonText: `No`,
            }).then((result) => {
              if (result.isConfirmed) {
                dispatch(deleteCard(props.id));
                Swal.fire("Deleted!", "", "success");
              } else if (result.isDenied) {
                Swal.fire("Chore not deleted", "", "info");
              }
            });
          }}
        >
          <BsTrash />
        </button>
        <button
          className="btn btn-info text-light m-1"
          onClick={() => {
            nav(`/chores/cards/details/${props.id}`);
          }}
        >
          More Details
        </button>
      </div>
    </div>
  );
};

export default CardItem;
