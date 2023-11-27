# Pauper Guessing Game

This is a guessing game for Magic: The Gathering cards. It was created to help streamers on sites like twitch.tv fill "dead air" by providing viewers with a fun game. A single card is randomly retrieved using the [magicthegathering.io](http://magicthegathering.io/) API. Details about the card are revealed over time with the full card details shown after 1 minute.

**Adding the game to your stream**

To use the game in your stream crop the browser window to the black box in your streaming software. The card will be fully revealed after 1 minute. Refresh the browser for a new card. The game is currently configured to only use cards printed at common rarity and does not include lands.

**Alternative PHP Version**

There is an alternative PHP-based version of the guessing game available for download, which you can upload to your own web server.

**Resources Used:**

- [jQuery](https://jquery.com/)
- [MagicTheGathering.io](http://magicthegathering.io/)
- [SVG Mana Costs](https://github.com/micku/mana-cost)
