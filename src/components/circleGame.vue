<template>
  <div class="circleGame">

    <message
      @select="levelSetting"
    />

    <div class="circleGame__topLeft"></div>
    <div class="circleGame__topRight"></div>
    <div class="circleGame__bottomLeft"></div>
    <div class="circleGame__bottomRight"></div>

    <div class="circleGame__innerCircle">
      <div class="platform">
        <div class="platform__title">
          SIMON!
        </div>

        <div class="switches">
          <div class="switches__tableCompl"></div>

          <button class="switches__button"
                  @click.prevent="play"

          >
            Start</button>

          <div class="switches__turn"></div>
        </div>

        <div class="text">
          <span class="text__one">LEVEL</span>
          <span class="text__two">COUNT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import message from "./message";

export default {
  components: {
    message
  },
  name: "circleGame",
  data() {
    return{
      level: '', //Уровень
      order: [], //порядок цветов
      interval: '', //переменная для интервала
      turn: 1, //ходы
      win: false, //флаг победы
      playerOrder: [], //сколько угадал пользователь
      turnCounter: 1, // какой уровень
      time: 0,  //Время между цветами
      flash: 0, //номер загорания
      compTurn: false, //флаг на ход
      noise: true //флаг на звук

    }
  },

  methods: {
    // Сброс всех кнопок
    clearColor() {
      document.querySelector('.circleGame__topLeft').style.backgroundColor = '#5fdb5f';
      document.querySelector('.circleGame__topRight').style.backgroundColor = '#db4444';
      document.querySelector('.circleGame__bottomLeft').style.backgroundColor = '#e5d77d';
      document.querySelector('.circleGame__topLeft').style.backgroundColor = '#385a94';
    },

    // Активация всех кнопок
    flashColor() {
      document.querySelector('.circleGame__topLeft').style.backgroundColor = '#33ff00';
      document.querySelector('.circleGame__topRight').style.backgroundColor = '#ff0000';
      document.querySelector('.circleGame__bottomLeft').style.backgroundColor = '#ffdd00';
      document.querySelector('.circleGame__topLeft').style.backgroundColor = '#005eff';
    },

    // Обновление поля уровня
    addCounter(turn) {
      document.querySelector('.switches__turn').textContent = turn;
    },

    // Настройка уровня сложности и установка времени
    levelSetting(data) {
      let key = Object.keys(data);
      //console.log(data);
      document.querySelector('.switches__tableCompl').textContent = data[key];

      if(data[key] === 'easy') {
        this.time = 1500;
      }else if (data[key] === 'mid') {
        this.time =  1000;
      }else {
        this.time = 400;
      }
      //console.log(this.time);
    },

    // Первая кнопка активации
    one(){
      if(this.noise){
        const audio = new Audio(require('@/sounds/1.mp3'));
        audio.play();
      }
      this.noise = true;
      document.querySelector('.circleGame__topLeft').style.backgroundColor = '#33ff00';
    },

    // Вторая кнопка активации
    two(){
      if(this.noise){
        let audio = new Audio(require('@/sounds/2.mp3'));
        audio.play();
      }
      this.noise = true;
      document.querySelector('.circleGame__topRight').style.backgroundColor = '#ff0000';

    },

    // Третья кнопка активации
    three(){
      if(this.noise){
        let audio = new Audio(require('@/sounds/3.mp3'));
        audio.play();
      }
      this.noise = true;
      document.querySelector('.circleGame__bottomLeft').style.backgroundColor = '#ffdd00';

    },

    // Четвертая кнопка активации
    four(){
      if(this.noise){
        let audio = new Audio(require('@/sounds/4.mp3'));
        audio.play();
      }
      this.noise = true;
      document.querySelector('.circleGame__bottomRight').style.backgroundColor = '#005eff';
    },

    //Запуск игры
    play(){
      // сброс настроек
      this.win = false;
      this.order = [];
      this.playerOrder = [];
      this.interval = 0;
      this.turnCounter = 1;
      this.flash = 0;
      this.addCounter(this.turnCounter);

      //Регулировка игры (заполнение порядка)
      for(let i = 0; i < 20; i++){
        this.order.push(Math.floor(Math.random() * 4) + 1)
      }

      this.compTurn = true;
      //Запуск активации кнопок
      this.interval = setInterval(this.gameTurn, this.time);
    },

    gameTurn() {

      if(this.flash === this.turn) {
        clearInterval(this.interval);
        this.compTurn = false;
        this.clearColor();
      }
      // Загорание кнопок
      if(this.compTurn) {
        this.clearColor();
        setTimeout(() => {
          if(this.order[this.flash] === 1){
            this.one();
          }
          else if(this.order[this.flash] === 2){
            this.two();
          }
          else if(this.order[this.flash] === 3){
            this.three();
          }
          else if(this.order[this.flash] === 4){
            this.four();
          }
          this.flash++;
        },200)
      }
    },


  },


}
</script>

