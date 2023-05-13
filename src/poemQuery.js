const moodInstructions = {
  gloomy: "The poem should be gloomy!",
  cheerful: "Make the poem cheerful!",
};

export const getPoemPrompt = ({
  itemTitle,
  imdbId,
  mood,
  poemLineCount,
}) => {
  const poemPromptInstructions = [
    `Write a ${poemLineCount > 12 ? 12 : poemLineCount}line poem about a movie or series.`,
    `The subject for your poem shall be ${itemTitle} which has the imdb id ${imdbId}.`,
    "Make sure that it rhymes!",
    "Do not ever mention the imdb id!",
    "Do not ignore the amount of lines specified!",
  ];

  if (mood in moodInstructions) {
    poemPromptInstructions.push(moodInstructions[mood]);
  }

  return poemPromptInstructions.join(" ");
}
