"use strict"

document.addEventListener("DOMContentLoaded", () =>{

  const cards = document.querySelectorAll(".catalog__wrapper__item");

  function cardHover(cards){
    cards.forEach((item) =>{
      item.addEventListener("mousemove", (e) =>{
        item.classList.add('active');
      })
      item.addEventListener("mouseout", (e) =>{
        item.classList.remove('active');
      })
    });
  }

  cardHover(cards);
  const logbtn = document.querySelector(".logout__wrapper__form_login");
  const modalLog = document.querySelector(".logout__wrapper__login");
  const regBtn = document.querySelector(".logout__wrapper__login_login");
  const modalReg = document.querySelector(".logout__wrapper__form");
  function userNow(log, reg, modalReg, modalLog){
    reg.addEventListener('click', () =>{
      modalReg.style.display = 'none';
      modalLog.style.display = 'flex';
    });
    log.addEventListener('click', () =>{
      modalReg.style.display = '';
      modalLog.style.display = '';
    });
  }

  if(regBtn){
    userNow(regBtn, logbtn, modalReg, modalLog);
  }
});