Vue.component('fancy-button', {
  template: `<button class="border_base display_block pad_25px width_100"><slot></slot></button>`
});

var vm = new Vue({
  el: '#app',
  data: {
    answers: ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'],
    defaultState: true,
  },
  methods: {
    randomAnswer: function () {
      return this.answers[Math.floor(Math.random() * this.answers.length)];
    }
  }
});
