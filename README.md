## Notes

- Here is an example of the JSON you can get for a subreddit

  - https://www.reddit.com/r/aww/hot.json
  - https://www.reddit.com/r/aww/new.json
  - https://www.reddit.com/r/aww/rising.json
  - https://www.reddit.com/r/aww/controversial.json
  - https://www.reddit.com/r/aww/top.json?t=hour
  - https://www.reddit.com/r/aww/top.json?t=day
  - https://www.reddit.com/r/aww/top.json?t=week
  - https://www.reddit.com/r/aww/top.json?t=month
  - https://www.reddit.com/r/aww/top.json?t=year
  - https://www.reddit.com/r/aww/top.json?t=all

- To get pagination to work, you need to add options to the URL.
  - For example: https://www.reddit.com/r/aww/top.json?t=year&after=t3_9fcjig
  - Before is the ID for the first post in the set. Use this to go to the previous page.
  - After is the ID for the last post in the set. Use this to go to the next page.
  - You do not use Before and After at the same time

## Technologies

Project built with:

- [Spectre](https://picturepan2.github.io/spectre/) - CSS Framework
- [jQuery](https://jquery.com/) - JavaScript Framework
