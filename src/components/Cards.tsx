import React, { useEffect } from "react";
import { Card } from "./Card.tsx";

import { getInitialCards } from "../store/cardSlice.ts";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { getProfileInfoThunk } from "../store/userSlice.ts";

export const Cards = () => {
  const cards = useAppSelector((state) => state.cards.cards);
  const myId = useAppSelector((state) => state.user.userId);
  // console.log(cards)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialCards());
  }, []);

  useEffect(() => {
    dispatch(getProfileInfoThunk());
  }, []);

  // const isLiked = myId === ?

  return (
    <ul className="places__list">
      {cards.map((card) => (
        <Card
          // isLiked={myId===card.owner._id}
          id={card._id}
          userId={card.owner._id}
          myId={myId}
          name={card.name}
          link={card.link}
          likes={card.likes}
        />
      ))}
    </ul>
  );
};
