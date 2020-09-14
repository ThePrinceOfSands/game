<template>
  <div class="circleGame">

    <audio src="src/sounds/1.mp3" class="sound_one"></audio>
    <audio src="src/sounds/2.mp3" class="sound_two"></audio>
    <audio src="src/sounds/3.mp3" class="sound_three"></audio>
    <audio src="src/sounds/4.mp3" class="sound_four"></audio>

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
          <button class="switches__button" id="start">Start</button>
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
      level: '',
      order: [],
      intervalId: '',

    }
  },
  methods: {
    levelSetting(data) {
      let key = Object.keys(data);
      //console.log(data);
      this.writeLevel(data, key)
    },
    writeLevel(data, key) {
      document.querySelector('.switches__tableCompl').textContent = data[key];
    }
  },


}
</script>

