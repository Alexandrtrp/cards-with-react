import React from "react";
import "./App.css";
import { Cards } from "./components/Cards.tsx";
import { Modal } from "./components/Modal.tsx";
import { PopupImage } from "./components/PopupImage.tsx";
import { useAppSelector } from "./store/hooks.ts";

// Приложение запрашивает у Json Placeholder Api
//  (https://jsonplaceholder.typicode.com/) список постов и выводит их на главной странице.
//  //  Пользователь может кликнуть по посту, перейти в него и увидеть его содержание и комментарии

function App() {
  const visiblePopup = useAppSelector((state) => state.cards.popupVisible);

  return (
    <div className="App">
      <div style={{ overflow: "hidden" }}>
        {visiblePopup && (
          <Modal >
            <PopupImage />
          </Modal>
        )}
      </div>

      {/* <header class="header page__section">
        <img alt="Логотип проекта мeсто" class="logo header__logo" />
      </header> */}
      <main className="content">
        {/* <section class="profile page__section">
          <div class="profile__image"></div>
          <div class="profile__info">
            <h1 class="profile__title">Жак-Ив Кусто</h1>
            <button class="profile__edit-button" type="button"></button>
            <p class="profile__description">Исследователь океана</p>
          </div>
          <button class="profile__add-button" type="button"></button>
        </section> */}
        <section className="places page__section">
          <Cards />
        </section>
      </main>
      <footer className="footer page__section">
        <p className="footer__copyright">© 2021 Mesto Russia</p>
      </footer>
    </div>
  );
}

export default App;
