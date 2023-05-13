export default {
  async fetch(request, env, ctx) {
    const gatherResponse = async (response) => await response.json();

    const getDataFromAPI = async () => {
      const API_URL = "https://fakestoreapi.com/products";
      const ApiResponse = await fetch(API_URL);
      const responseData = await gatherResponse(ApiResponse);

      const { title } = responseData[0];
      return title;
    }

    return new Response(getDataFromAPI());
  },
};
