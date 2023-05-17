const poemStyleInstructions = {
  gloomy: "The poem should be gloomy.",
  cheerful: "Make the poem cheerful.",
  sarcastic: "Write the poem in a sarcastig way.",
  spoilerFree: "Keep it spoiler-free. Don't reveal any plot-twist.",
  condescending: "Write in a condescending way.",
};

const poemLanguageInstructions = {
  english: "Write the poem in English.",
  german: "Write the poem in German.",
  french: "Write the poem in French.",
  spanish: "Write the poem in Spanish.",
  serbian: "The poem language should be Serbian.",
}

export const getPoemPrompt = ({
  itemTitle,
  imdbId,
  poemStyle,
  poemLineCount,
  poemLanguage,
}) => {
  const finalLineCount = poemLineCount > 12 ? 12 : poemLineCount;
  const poemPromptInstructions = [
    "Write a poem about a movie or series.",
    `The subject for your poem shall be ${itemTitle} which has the imdb id ${imdbId}.`,
    `The poem should consist of ${finalLineCount} lines exactly.`,
    "Each line should have a rhyming pattern.",
    "Please ensure that the poem adheres to the specified line count and doesn't exceed or fall short.",
    "Avoid mentioning the IMDb ID in the poem.",
    `Remember to maintain the requested ${finalLineCount}-line structure without deviation`,
  ];

  if (poemStyle in poemStyleInstructions) {
    poemPromptInstructions.push(poemStyleInstructions[poemStyle]);
  }

  if (poemLanguage in poemLanguageInstructions) {
    poemPromptInstructions.push(poemLanguageInstructions[poemLanguage]);
  }

  console.log("poemPromptInstructions:", poemPromptInstructions);
  return poemPromptInstructions.join(" ");
}
