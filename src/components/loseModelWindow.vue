<template>
  <div class="loseModelWindow">

      <div class="loseModelWindow__title">Игра Окончена!!!</div>
      <div class="loseModelWindow__subtitle">Мне жаль!!! <br>Вы потерпели поражение в "Simon game".</div>
      <div class="loseModelWindow__result">Ваш итоговый счет: {{result}} <br><br>Хотите начать сначала?</div>

      <div class="buttons">
        <button class="buttons__button"
                @click="restart"
        >
          Сначало
        </button>
      </div>
  </div>
</template>

<script>
export default {
  name: "loseModelWindow",
  props: ['result'],
  methods:{
    restart() {
      document.querySelector('.loseModelWindow').style.display = 'none';
      this.$emit('restart', {
        flag: 'restart',
      });
    }
  }
}
</script>

