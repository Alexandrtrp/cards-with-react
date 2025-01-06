import { deleteVisiblePopup } from "../store/cardSlice.ts";
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";

export const PopupImage = () => {
  const dispatch = useAppDispatch();
  const popupData = useAppSelector((state) => state.cards.popupData);
  return (
    <div className="popup popup_type_image">
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="popup__content popup__content_content_image"
      >
        <button
          type="button"
          className="popup__close"
          onClick={() => dispatch(deleteVisiblePopup())}
        ></button>
        <img
          style={{ width: "400px", height: "400px" }}
          src={popupData.link}
          alt=""
          className="popup__image"
        />
        <p className="popup__caption">{popupData.text}</p>
        <div style={{display:'flex', flexDirection:'column', gap: '10px'}}>
          {popupData.likes.map((like) => (
            <div style={{ display: "flex", gap: "10px" }}>
              <img
                style={{ width: "40px", height: '40px' }}
                src={like.avatar}
                alt="Тут должна быть аватарка"
              />
              <p style={{ color: "white" }}>Name : {like.name}</p>
              <p style={{ color: "white" }}>About: {like.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
