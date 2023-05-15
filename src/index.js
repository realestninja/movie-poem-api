import { getItemTitleById } from "./helpers/omdb";
import { callOpenAiAPI } from "./helpers/openai";
import { getPoemPrompt } from "./poemQuery";

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "*",
    };

    if (request.method === "OPTIONS") {
      return new Response("OK", {
        headers: corsHeaders,
      });
    }

    if (request.method === "POST") {
      const payload = await request.json()
      console.log("payload:", payload);

      if ("imdbId" in payload) {
        const {
          imdbId,
          mood = "",
          language = "",
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
          language,
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
              ...corsHeaders,
            },
          }
        );
      }
    }

    return new Response("hello world");
  },
};
