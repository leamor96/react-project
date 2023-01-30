import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { chores } from "../../data/cards";
import CardItem from "../../pages/card-item/CardItem";

const [card1]= chores.filter(card=>card.id==='12')
const [card2]= chores.filter(card=>card.id==='34')
const [card3]= chores.filter(card=>card.id==='56')
const [card4]= chores.filter(card=>card.id==='106')
const [card5]= chores.filter(card=>card.id==='91')
const [card6]= chores.filter(card=>card.id==='10')
const [card7]= chores.filter(card=>card.id==='103')
const [card8]= chores.filter(card=>card.id==='104')

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MultiCarousel = () => {
  return (
    <Carousel responsive={responsive} className='m-5'>
      <div>
        <CardItem {...card1} />
      </div>
      <div>
        <CardItem {...card2} />
      </div>
      <div>
        <CardItem {...card3} />
      </div>
      <div>
        <CardItem {...card4} />
      </div>
      <div>
        <CardItem {...card5} />
      </div>
      <div>
        <CardItem {...card6} />
      </div>
      <div>
        <CardItem {...card7} />
      </div>
      <div>
        <CardItem {...card8} />
      </div>
    </Carousel>
  );
};

export default MultiCarousel;
