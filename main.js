new Vue ({
  el: '#app',
  data: {
    usernameInput: '',
    dateOutput: ''
  }, //end data
  computed: {
    htmlOutput: function () {
      return this.dateOutput;
    } //end htmlOutput
  }, //end computed
  methods: {
    checkUsername: _.debounce(
      function(e) {
      this.usernameInput = e.target.value;
      fetch('https://api.mixcloud.com/' + this.usernameInput + '/')
        .then(res => res.json())
        .then(data => {
          if (data.created_time == null) {
            this.dateOutput = '<div class="alert alert-danger">Sorry, that username was not found. Please try another username.</div>';
          }
          else if (data.created_time != null){
            this.dateOutput = '<div class="alert alert-success">That account was created on ' + moment(data.created_time).format("MMMM D, YYYY") + '.</div>';
          }
                      });
    }, 500) //end checkUsername
  }
});