import { useAppSelector } from "../../app/hooks";
import CardItem from "../card-item/CardItem"; 



const CardList = () => {
  const cards = useAppSelector((s) => s.cards.cards);

  return (
    <div className="container d-flex flex-wrap justify-content-center align-items-center">
      {cards.map((card) => (
        <CardItem {...card} key={card.id} />
      ))}
    </div>
  );
};

export default CardList;
