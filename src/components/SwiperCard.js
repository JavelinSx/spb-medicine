import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PacientForm from "./PacientForm";
const SwiperCard = ({ cardsPacient, addCardPacient, deleteCardPacient }) => {
  console.log(cardsPacient);

  function handleClickAddCard() {
    addCardPacient()
  }
  function handleClickDeleteCard() {
    deleteCardPacient()
  }

  return (
    <div className="swiper-card">
      <div className="dev-card">
        <button
          className="button button-animation button__dev-card"
          onClick={handleClickAddCard}
        >
          Добавить карточку
        </button>
        <button
          className="button button-animation button__dev-card"
          onClick={handleClickDeleteCard}
        >
          Удалить карточку
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {cardsPacient.map((cards) => cards.map((card) => {
          return (
            <SwiperSlide key={card._idCard}>
              <PacientForm card={card}></PacientForm>
            </SwiperSlide>
          );
        }))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
