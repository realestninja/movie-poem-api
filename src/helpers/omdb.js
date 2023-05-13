import { gatherResponse } from "./worker";

const OMDB_API_BASE = "https://www.omdbapi.com/?";
const createOmdbApiCallById = ({ token, id }) => `${OMDB_API_BASE}apikey=${token}&i=${id}`;

export const getItemTitleById = async ({ id, token }) => {
  const apiUrl = createOmdbApiCallById({
    token,
    id,
  });

  const apiResponse = await fetch(apiUrl);
  const responseData = JSON.parse(await gatherResponse(apiResponse));
  const { Title = "" } = responseData;

  return Title;
}
