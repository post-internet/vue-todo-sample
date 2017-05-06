var APP_NAME = 'TodoApp';

var app = new Vue({
  data: {
    title: 'Todo App',
    taskList: JSON.parse(localStorage[APP_NAME] || '[]'),
    newTaskText: '',
  },
  computed: {
    hasDoneTask: function () {
      return this.taskList.some(function (task) {
        return task.isDone;
      });
    },
  },
  watch: {
    taskList: {
      handler: function (taskList) {
        localStorage[APP_NAME] = JSON.stringify(taskList);
      },
      deep: true,
    },
  },
  methods: {
    addTask: function () {
      var newTask = {
        text: this.newTaskText,
        isDone: false,
      };
      this.taskList.push(newTask);
      this.newTaskText = '';
    },
    toggleDone: function (task) {
      task.isDone = !task.isDone;
    },
    clearDone: function () {
      this.taskList = this.taskList.filter(function (task) {
        return task.isDone !== true;
      });
    },
  },
});

app.$mount('#app');
