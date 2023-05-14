import { getItemTitleById } from "./helpers/omdb";
import { callOpenAiAPI } from "./helpers/openai";
import { getPoemPrompt } from "./poemQuery";

export default {
  async fetch(request, env) {
    if (request.method === "POST") {
      const payload = await request.json()
      console.log("payload:", payload);

      if ("imdbId" in payload) {
        const {
          imdbId,
          mood = null,
          poemLineCount = "10",
        } = payload;

        const itemTitle = await getItemTitleById({
          id: imdbId,
          token: env.OMDB_API_TOKEN,
        });

        const poemPrompt = getPoemPrompt({
          itemTitle,
          imdbId,
          mood,
          poemLineCount,
        });

        const openAiParams = {
          prompt: poemPrompt,
          bearer: env.OPEN_AI_API_KEY,
        }

        const openAiResponse = await callOpenAiAPI(openAiParams);
        console.log("openAiResponse:", openAiResponse);

        const responseBodyForClient = {
          poem: openAiResponse,
        }

        return new Response(
          JSON.stringify(responseBodyForClient),
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
      }
    }

    return new Response("hello world");
  },
};
