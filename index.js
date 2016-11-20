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
        isDone: false,
      },
    ],
  },
});

app.$mount('#app');
