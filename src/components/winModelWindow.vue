<template>
  <div class="winModelWindow">
    <div class="winModelWindow__title">Игра Окончена!!!</div>
    <div class="winModelWindow__subtitle">Поздравляю!!! <br>Вы полностью прошли игру "Simon game".</div>
    <div class="winModelWindow__result">Ваш итоговый счет: {{result}} <br><br>Хотите начать сначала?</div>

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
  name: "winModelWindow",
  props: ['result'],
  methods:{
    restart(){
      document.querySelector('.winModelWindow').style.display = 'none';
      this.$emit('restart',{
        flag: 'restart',
      })

    }
  }
}
</script>

