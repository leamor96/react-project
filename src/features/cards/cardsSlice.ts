import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { chores } from "../../data/cards";

export type Tag = "Daily" | "Monthly" | "Seasonal" | "Enterior" | "Exterior";

export type Card = {
  id: string;
  name: string;
  description: string;
  tag: Tag;
  isFavorite: boolean;
};

export type CardsState = {
  cards: Card[];
};

const initialState: CardsState = {
  cards: chores,
};

//name: cards, values: cards: Card[]
export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    // אילו פעולות אנו רוצים בחנות
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    editCard: (state, action: PayloadAction<Card>) => {
      const { id, name, description, tag, isFavorite } = action.payload;
      const cardIndex = state.cards.findIndex((card) => card.id === id);
      if (cardIndex >= 0) {
        state.cards[cardIndex] = { id, name, description, tag, isFavorite };
      }
    },

    deleteCard: (state, action: PayloadAction<string>) => {
      //action.payload = id of the card to remove
      const index = state.cards.findIndex((c) => c.id === action.payload);

      //delete the card at index:
      state.cards.splice(index, 1);
    },
    //add to costume list
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.cards.findIndex((c) => c.id === action.payload);

      if (index !== -1) {
        state.cards[index].isFavorite = !state.cards[index].isFavorite;
      }
    },
  },
});

export const { addCard, deleteCard, editCard, toggleFavorite } =
  cardsSlice.actions;
export default cardsSlice.reducer;
