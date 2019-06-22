let state = {
  after: '',
  posts: [],
  searchInput: '',
  subreddit: '',
  url: '',
  getSubredditUrl: function(){
    this.subreddit = this.searchInput.val();
    this.url = `https://www.reddit.com/r/${this.searchInput.val()}/top.json?t=all`;
  },
  getPosts: async function(){
    await fetch(this.url)
    .then(res => res.json())
    .then(json => {
      let {after, children} = json.data;
      this.after = after;
      this.posts = children;
      this.url += `&after=${this.after}`
    })
  },
  contentEmbed: function(url){
    if (
      url &&
      url.match(/\.(jpg|png|jpeg|bpm|gif)$/)
    ) {
      content = `<div class="card-image">
        <a href="${url}"><img src="${url}" class="img-responsive" /></a>
        </div>`;
      return content;
    } 
    else if (
      url &&
      url.match(/\.(gifv)$/)
    ) {
      let newURL = url.replace(".gifv", ".mp4");
      content = `<div class="card-image">
      <video src="${newURL}" style="max-width: 100%" autoplay loop />
      </div>`;
      return content;
    }
    else {
      return "";
    }
  },
  formatPosts: function(){
    let html = `<div class="columns">`;
    $.each(this.posts, function(i, item) {
      let {url, id, title, permalink} = item.data;
      let content = state.contentEmbed(url);
      html += `
        <div class="column col-lg-12 col-xl-6 col-6 mb-2 singlePost" id="${id}">
          <div class="card">
            ${content}
            <div class="card-body">
              <span class="card-title">${title}</span>
            </div>
            <div class="card-footer">
              <a href="https://www.reddit.com${permalink}" target="_blank">Comments</a>
            </div>
          </div>
        </div>`;
    });
    html += `</div>`;
    $("#app").append(html);
  },
  formSubmit: async function(event){
    event.preventDefault();
    $("#app").html('');
    this.searchInput = $("#searchForm");
    this.searchInput.blur();
    await this.getSubredditUrl();
    await this.getPosts();
    this.formatPosts();
    this.searchInput.val('');
  },
  loadMorePosts: async function(){
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      await this.getPosts();
      this.formatPosts();
    }
  }
};

$("#subSearch").on("submit", function(){
  state.formSubmit(event);
});


$(window).on("scroll", function () {
  state.loadMorePosts();
});