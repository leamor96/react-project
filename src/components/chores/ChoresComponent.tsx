import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { useAppDispatch } from "../../app/hooks";
import { Card, Tag, addCard } from "../../features/cards/cardsSlice";


const ChoresComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState<Tag>("Daily");


  //dispatch:
  const dispatch = useAppDispatch();
  // 1) boolean state for the modal:
  const [isOpen, setOpen] = useState(false);
  Modal.setAppElement("#root");
  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="d-flex">
        <button
          onClick={openModal}
          className="mt-4 mb-2 btn btn-info text-light mx-auto"
        >
          Create New Chore
        </button>
      </div>
      <Modal
        onRequestClose={closeModal}
        isOpen={isOpen}
        className="border-0 mt-5"
      >
        <div className="card w-75 mx-auto p-2">
          <button className="btn ms-auto" onClick={closeModal}>
            <AiOutlineClose />
          </button>
          <h2 className="p-2">Create New Chore</h2>
          <label htmlFor="name" className="p-2">
            name:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <label htmlFor="description" className="p-2">
            description:
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <label htmlFor="tag" className="p-2">
            choose a tag:
          </label>
          <select
            value={tag}
            name="tag"
            id="tag"
            onChange={(e) => {
              const tag = e.currentTarget.value as Tag;
              setTag(tag);
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
              const card: Card = {
                id: v4(),
                name: name,
                description: description,
                tag: tag,
                isFavorite: false,
              };
              //dispatch addCard(card)
              dispatch(addCard(card));
             Swal.fire({
               title: "Chore successfully added!",
               icon: "success",
               confirmButtonColor: "#0dcaf0",
               confirmButtonText: "OK",
             }).then(() => closeModal());
            }}
          >
            create chore
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ChoresComponent;
