import React from "react";
import { addVisiblePopup, saveDataToPopup, TPersonInfo } from "../store/cardSlice.ts";
import { useAppDispatch } from "../store/hooks.ts";

type TProps = {
  id: string;
  link: string;
  name: string;
  likes: Array<TPersonInfo>;
};

export const Card = (props: TProps) => {
  const dispatch = useAppDispatch();

  return (
    <li className="places__item card" id={props.id}>
      <img
        onClick={() => {
          dispatch(addVisiblePopup());
          dispatch(saveDataToPopup({ link: props.link, text: props.name, likes: props.likes }));
        }}
        className="card__image"
        src={props.link}
        alt=""
      />
      <button type="button" className="card__delete-button"></button>
      <div className="card__description">
        <h3 className="card__title">{props.name}</h3>
        <div className="card__like-button_wrapper">
          <button type="button" className="card__like-button"></button>
          <span className="card__like-button_likes">{props.likes.length}</span>
        </div>
      </div>
    </li>
  );
};
