var app = new Vue({
  data: {
    title: 'Todo Title',
    taskList: [
      {
        text: 'Todo Task 01',
        isDone: false,
      },
      {
        text: 'Todo Task 02',
        isDone: true,
      },
    ],
    newTaskText: '',
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
  },
});

app.$mount('#app');
