<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from './components/TaskList'

export default {
  name: 'app',
  components: {
    TaskList
  },
  data () {
    return {
      title: 'Todo App'
    }
  }
}
</script>

<style>
html, body {
  background: #FAFAFA;
  color: #212121;
  font-family: "游ゴシック", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif;
}

#app {
  max-width: 680px;
  margin: auto;
}

#app h1 {
  text-align: center;
}


</style>
