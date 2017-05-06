<template>
  <div>
    <p class="addtask">
      <input type="text" placeholder="Write your Todo" v-model="newTaskText" v-on:keydown.enter="addTask()" />
      <button v-on:click="addTask()">ADD</button>
    </p>
    <ul class="tasklist">
      <template v-for="task in taskList">
        <li class="task" v-bind:class="{ 'is-done': task.isDone }" v-on:click.prevent="toggleDone(task)">
          <label><input type="checkbox" v-model="task.isDone" /></label>
          <span>{{ task.text }}</span>
        </li>
      </template>
    </ul>
    <p v-if="hasDoneTask" id="clear-done">
      <small v-on:click="clearDone()">Clear done</small>
    </p>
  </div>
</template>

<script>

const APP_NAME = 'TodoApp'

export default {
  data () {
    return {
      taskList: JSON.parse(localStorage[APP_NAME] || '[]'),
      newTaskText: ''
    }
  },
  computed: {
    hasDoneTask () {
      return this.taskList.some(function (task) {
        return task.isDone
      })
    }
  },
  watch: {
    taskList: {
      handler (taskList) {
        localStorage[APP_NAME] = JSON.stringify(taskList)
      },
      deep: true
    }
  },
  methods: {
    addTask () {
      const newTask = {
        text: this.newTaskText,
        isDone: false
      }
      this.taskList.push(newTask)
      this.newTaskText = ''
    },
    toggleDone (task) {
      task.isDone = !task.isDone
    },
    clearDone () {
      this.taskList = this.taskList.filter(function (task) {
        return task.isDone !== true
      })
    }
  }
}
</script>

<style>
.addtask {
  height: 2.0em;
  display: flex;
}

.addtask input {
  font-family: inherit;
  flex-grow: 1;
  max-width: 100%;
  border: #F0F0F0 1px solid;
  border-radius: 3px 0 0 3px;
  padding: 0 1.0em;
}

.addtask button {
  font-family: inherit;
  background: #388E3C;
  color: #FAFAFA;
  padding: 5px 10px;
  border: none;
  border-radius: 0 3px 3px 0;
}

.tasklist {
  list-style-type: none;
  border: #F0F0F0 1px solid;
  border-radius: 3px;
  padding: 0;
  margin: 0;
}

.task {
  padding: 1.0em 3.0em;
  line-height: 1.5em;
}

.task label {
  position: relative;
  display: inline-block;
  margin: auto;
}

.task label > input[type="checkbox"] {
  display: none;
}

.task label:before {
  content: "";
  margin-bottom: -0.25em;
  display: inline-block;
  width: 1.0em;
  height: 1.0em;
  background: #FFF;
  border: #757575 1px solid;
  border-radius: 3px;
}

.task:nth-child(2n + 1) {
  background: #F0F0F0;
}

.task:nth-child(2n) {
  background: #FAFAFA;
}

.task.is-done {
  opacity: 0.5;
}

.task.is-done label:after {
  content: "";
  position: absolute;
  top: 6px;
  left: 2px;
  display: inline-block;
  width: 10px;
	height: 5px;
  border-left: 3px solid #1B5E20;
	border-bottom: 2px solid #1B5E20;
  transform: rotate(-45deg);
}
</style>
