import React, { useEffect, useState } from "react";
import {
  addVisiblePopup,
  saveDataToPopup,
  TPersonInfo,
} from "../store/cardSlice.ts";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { addLike, deleteLike } from "../store/likeSlice.ts";

// change state -> useEffect -> dispatch addlike -> likeSlice -> likes in initialState -> state

type TProps = {
  myId: string;
  userId: string;
  id: string;
  link: string;
  name: string;
  likes: Array<TPersonInfo>;
  // isLiked: boolean;
};

export const Card = (props: TProps) => {
  const dispatch = useAppDispatch();
  const likesObj = useAppSelector((state) => state.like);

  const isLiked = props.likes.find(el=>el._id === props.myId) ? true : false

  const [likes, setLikes] = useState(props.likes.length);
  const [isLike, setIsLike] = useState(isLiked);

  useEffect(() => {
    isLike ? dispatch(addLike(props.id)) : dispatch(deleteLike(props.id))
  }, [isLike]);

  return (
    <li className="places__item card" key={props.id} id={props.id}>
      <img
        onClick={() => {
          dispatch(addVisiblePopup());
          dispatch(
            saveDataToPopup({
              link: props.link,
              text: props.name,
              likes: props.likes,
            })
          );
        }}
        className="card__image"
        src={props.link}
        alt=""
      />
      <button type="button" className="card__delete-button"></button>
      <div className="card__description">
        <h3 className="card__title">{props.name}</h3>
        <div className="card__like-button_wrapper">
          <button
            type="button"
            className={
              isLike
                ? "card__like-button_is-active card__like-button"
                : "card__like-button"
            }
            onClick={(e) => {
              setIsLike(!isLike);
              isLike ? setLikes(likes - 1) : setLikes(likes + 1);
            }}
          ></button>
          <span className="card__like-button_likes">{likes}</span>
        </div>
      </div>
    </li>
  );
};
