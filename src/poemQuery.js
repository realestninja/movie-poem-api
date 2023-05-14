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
    "Write a poem about a movie or series.",
    `The subject for your poem shall be ${itemTitle} which has the imdb id ${imdbId}.`,
    `The poem should be exactly ${poemLineCount > 12 ? 12 : poemLineCount} lines long! Not longer and not shorter.`,
    "Make sure that it rhymes!",
    "Do not ever mention the imdb id!",
    "Do not ignore the amount of lines specified!",
  ];

  if (mood in moodInstructions) {
    poemPromptInstructions.push(moodInstructions[mood]);
  }

  console.log("poemPromptInstructions:", poemPromptInstructions);
  return poemPromptInstructions.join(" ");
}
