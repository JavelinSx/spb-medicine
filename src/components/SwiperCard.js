import React from "react";
import { useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PacientForm from "./PacientForm";
const SwiperCard = ({ oncePacientInfo, oncePacientCard, addCardPacient, deleteCardPacient }) => {
  const [currentCard, setCurrentCard] = useState('')
  function handleClickAddCard() {
    oncePacientInfo.map((pacient)=>addCardPacient(pacient._id))
  }
  function handleClickDeleteCard(currentCard) {
    deleteCardPacient(currentCard)
  }
  function handleCurrentCard(data){
    setCurrentCard(data.realIndex)
  }
  return (
    <div className="swiper-card">
      <div className="dev-card">
        <button
          className="button button-animation button__dev-card"
          onClick={()=>handleClickAddCard()}
        >
          Добавить карточку
        </button>
        <button
          className="button button-animation button__dev-card"
          onClick={()=>handleClickDeleteCard(currentCard)}
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
        onSlideChange={(data)=>handleCurrentCard(data)}
      >
        {oncePacientCard.map((card) => {
          return (
            <SwiperSlide key={Math.floor(Math.random()*1000)}>
              <PacientForm card={card}></PacientForm>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
