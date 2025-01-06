import React from "react";
import "./App.css";
import { Cards } from "./components/Cards.tsx";
import { Modal } from "./components/Modal.tsx";
import { PopupImage } from "./components/PopupImage.tsx";
import { useAppSelector } from "./store/hooks.ts";

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
      <main className="content">
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
