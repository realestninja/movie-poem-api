# Movie Poem API
This API runs as a Cloudflare Worker. It takes an Imdb-id, fetches the correct item-title from the omdb API and then prompts the openai-API to create a poem.

## Example output
> Westworld, oh Westworld, a show so grand,\
> A world of robots, and a theme park so planned,\
> A place for guests to indulge and play,\
> With hosts so real, they blend in every way.\
> The park is vast, with secrets to keep,\
> And hidden stories for guests to seek,\
> A place of freedom, where rules don't apply,\
> But chaos ensues, as hosts question why.\
> The twists and turns of every plot,\
> Add to the show's allure and make it hot,\
> Westworld, oh Westworld, a show so divine,\
> Where man and machine, blur the line.

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
