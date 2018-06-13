<template>
  <div class="Playground">
    <div class="Playground__row">
      <input class="Playground__row-input" id="message-one" placeholder="try to input something" v-model="firstMessage" />
      <span class="Playground__row_output">{{firstMessage}}</span>
    </div>

    <div class="Playground__row">
      <input class="Playground__row-input" id="message-two" placeholder="try to input something else" v-model="secondMessage" />
      <span class="Playground__row_output">{{secondMessage}}</span>
    </div>
    <div class="Playground__row">
      <button class="btn btn-primary Playground__button" @click="saveContent">Save Content</button>
    </div>
  </div>
</template>

<script>
import { SAVE_CONTENT } from '../store/mutation-types'

export default {
  name: 'Playground',
  data: () => ({
    firstMessage: '',
    secondMessage: ''
  }),
  methods: {
    saveContent (e) {
      this.$store.commit(SAVE_CONTENT, {firstMessage: this.firstMessage, secondMessage: this.secondMessage})
    }
  }
}
</script>

<style scoped>
.Playground {
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 200px;
}

.Playground__button {
  width: 30%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.Playground__row {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.Playground__row-input {
  width: 50%
}

.Playground__row_output {
  flex: 1 1 200px;
}

</style>
