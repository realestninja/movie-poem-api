import { gatherResponse } from "./helper";
import { callOpenAiAPI } from "./openai";

export default {
  async fetch(request, env, ctx) {
    const OMDB_API_BASE = "https://www.omdbapi.com/?";
    const createOmdbApiCall = ({ token, id }) => `${OMDB_API_BASE}apikey=${token}&i=${id}`;

    const dummyImdbId = "tt0475784";

    const getTitleById = async () => {
      const apiUrl = createOmdbApiCall({
        token: env.OMDB_API_TOKEN,
        id: dummyImdbId,
      });

      const apiResponse = await fetch(apiUrl);
      const responseData = JSON.parse(await gatherResponse(apiResponse));
      const { Title = "" } = responseData;

      return Title;
    }

    const title = await getTitleById()

    const dummyOpenAiParams = {
      prompt: `Write a 10 line poem about a movie or series and make sure that it rhymes. The subject for your poem shall be ${title} which has the imdb id ${dummyImdbId}`,
      bearer: env.OPEN_AI_API_KEY,
    }

    const openAiResponse = await callOpenAiAPI(dummyOpenAiParams);

    return new Response(openAiResponse);
  },
};
