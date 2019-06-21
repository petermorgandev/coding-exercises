## Notes

- Here is an example of the JSON you can get for a subreddit

  - https://www.reddit.com/r/aww/hot/.json
  - https://www.reddit.com/r/aww/new/.json
  - https://www.reddit.com/r/aww/controversial/.json
  - https://www.reddit.com/r/aww/top/.json?t=hour
  - https://www.reddit.com/r/aww/top/.json?t=day
  - https://www.reddit.com/r/aww/top/.json?t=week
  - https://www.reddit.com/r/aww/top/.json?t=month
  - https://www.reddit.com/r/aww/top/.json?t=year
  - https://www.reddit.com/r/aww/top/.json?t=all

- To get pagination to work, you need to add options to the URL.
  - For example: https://www.reddit.com/r/aww/top/.json?t=year&count=25&after=t3_9fcjig
  - Before is the ID for the first post in the set. You would use this to go to the previous page
  - After is the ID for the last post in the set. You would use this to go to the next page
  - You never use Before and After at the same time
  - Count is the number of posts you have already seen. By default the json file contains 25 posts, so you would want to increment this by 25 time for each new after request, but for before requests you want to add one.
    - For example, going from page 1 to 2 you would have count be 25. Going from page 2 to 3 count would be 50, but going from page 2 to 1 would be 26.

## Technologies

Project built with:

- [Spectre](https://picturepan2.github.io/spectre/) - CSS Framework
- [jQuery](https://jquery.com/) - JavaScript Framework
