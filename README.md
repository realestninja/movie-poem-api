# Movie Poem API
This API runs as a Cloudflare Worker. It takes an Imdb-id, fetches the correct item-title from the omdb API and then prompts the openai-API to create a poem.

## Requirements
* either have `node` version **18.12.0** or have `nvm` installed so it can manage your version
* [omdb API key](https://www.omdbapi.com/apikey.aspx)
* [openai API key](https://platform.openai.com/account/api-keys)

## Installation
`yarn install`

## Development
`yarn dev`

## Deployment
`yarn deploy`, then follow the steps presented by Wrangler. After deployment, you should have received the url where the bot is hosted. This will be used as webhook.
