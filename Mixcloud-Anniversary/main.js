new Vue ({
  el: '#app',
  data: {
    usernameInput: '',
    dateOutput: '',
    errored: ''
  },
  computed: {
    htmlOutput: function () {
      return moment(this.dateOutput).format("MMMM D, YYYY");
    }
  },
  methods: {
    checkUsername: _.debounce(
      function(e) {
        this.dateOutput = ''; 
        this.errored = '';
        this.usernameInput = e.target.value;
        axios
          .get(`https://api.mixcloud.com/${this.usernameInput}/`)
          .then(response => this.dateOutput = response.data.created_time)
          .catch(error => this.errored = true)
      }, 1000)
  }
});