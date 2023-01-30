import { useState } from "react";
import {
  Container,
  FormControl,
  Button,
} from "react-bootstrap";
import { useAppSelector } from "../../app/hooks";
import CardItem from "../../pages/card-item/CardItem";

const CostumeComponent = () => {
  const { cards } = useAppSelector((state) => state.cards);
  const favoriteChores = cards.filter((c) => c.isFavorite);
  const [selectedTag, setSelectedTag] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const filteredChores = favoriteChores.filter(
    (c) => c.tag === selectedTag || selectedTag === ""
  );

  return (
    <div>
      <Container className="p-xl-3 d-flex justify-content-end">
        <Button
          className="btn btn-info text-light"
          onClick={() => setShowOptions(!showOptions)}
        >
          Sort By Tag:
        </Button>
        {showOptions && (
          <div style={{ position: "relative", width: "100px" }}>
            <FormControl
              as="select"
              style={{
                width: "100%",
                position: "absolute",
                zIndex: "100",
              }}
              className="ml-3"
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">All</option>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
              <option value="Seasonal">Seasonal</option>
              <option value="Enterior">Enterior</option>
              <option value="Exterior">Exterior</option>
            </FormControl>
          </div>
        )}
      </Container>
      <Container className="p-xl-3">
        <h2 className="text-center p-xl-4">My Chores Costume List</h2>
        {filteredChores.length > 0 ? (
          <div className="d-flex flex-wrap">
            {filteredChores.map((c) => (
              <CardItem {...c} key={c.id} />
            ))}
          </div>
        ) : (
          <div className="text-center p-xl-4">
            Sorry, there aren't any {selectedTag || "All"} chores yet.
          </div>
        )}
      </Container>
    </div>
  );
};

export default CostumeComponent;
