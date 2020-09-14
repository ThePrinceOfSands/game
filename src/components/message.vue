<template>
  <div class="message">
    <div class="message__title">Добро пожаловать <br>на игру Simon!</div>
    <div class="message__subtitle">
      Выберете уровень сложности
    </div>

    <div class="buttons">
      <button class="buttons__level"
              @click.prevent="levelGet('easy')"
      >
        Easy</button>

      <button class="buttons__level"
              @click.prevent="levelGet('mid')"
      >
        Middle</button>

      <button class="buttons__level"
              @click.prevent="levelGet('hard')"
      >
        Hard</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "message",
  props: ['levelSetting'],

  methods: {
    levelGet(lev) {
      //console.log(lev);
      document.querySelector('.message').style.display = 'none';

      this.$emit('select', {
        lev: lev,
      })
    },
  }
}
</script>
