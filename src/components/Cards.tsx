import React, { useEffect } from "react";
import { Card } from "./Card.tsx";

import { getInitialCards } from "../store/cardSlice.ts";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";

export const Cards = () => {
  const cards = useAppSelector((state) => state.cards.cards);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialCards());
  }, []);

  return (
    <ul className="places__list">
      {cards.map((card) => (
        <Card
          id={card._id}
          name={card.name}
          link={card.link}
          likes={card.likes}
        />
      ))}
    </ul>
  );
};
