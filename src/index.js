import { getItemTitleById } from "./helpers/omdb";
import { callOpenAiAPI } from "./helpers/openai";

export default {
  async fetch(request, env, ctx) {
    if (request.method === "POST") {
      const payload = await request.json()

      if ("imdbId" in payload) {
        const { imdbId } = payload;

        const title = await getItemTitleById({
          id: imdbId,
          token: env.OMDB_API_TOKEN,
        });

        const dummyOpenAiParams = {
          prompt: `Write a 10 line poem about a movie or series and make sure that it rhymes. The subject for your poem shall be ${title} which has the imdb id ${imdbId}. Do not ever mention the imdb id!`,
          bearer: env.OPEN_AI_API_KEY,
        }

        const openAiResponse = await callOpenAiAPI(dummyOpenAiParams);
        console.log("openAiResponse:", openAiResponse);

        return new Response({
          poem: openAiResponse,
        });
      }
    }

    return new Response("hello world");
  },
};
