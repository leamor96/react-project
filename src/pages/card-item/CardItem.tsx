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
      <button className="border-0 bg-transparent favorite-icon"
        onClick={() => dispatch(toggleFavorite(props.id))}
      >
        {!props.isFavorite && <BiTaskX/>}
        {props.isFavorite && <BiTask />}
      </button>
      <div>
        <h2 className="cardTitle mt-2">{props.name}</h2>
      </div>
      <div className="buttons">
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
             confirmButtonColor: "#7f91b0",
             denyButtonColor: "black",
             showCancelButton: false,
           }).then((result) => {
             if (result.isConfirmed) {
               dispatch(deleteCard(props.id));
               Swal.fire({
                 title: "Deleted!",
                 icon: "success",
                 confirmButtonColor: "#0dcaf0",
               });
             } else if (result.isDenied) {
               Swal.fire({
                 title: "Chore not deleted",
                 icon: "info",
                 confirmButtonColor: "#0dcaf0",
               });
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
