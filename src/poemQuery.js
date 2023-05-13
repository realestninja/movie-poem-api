const moodInstructions = {
  "default": "",
};

export const getPoemPrompt = ({
  itemTitle,
  imdbId,
  mood,
  poemLineCount,
}) => {
  const poemPromptInstructions = [
    `Write a ${poemLineCount}line poem about a movie or series and make sure that it rhymes.`,
    `The subject for your poem shall be ${itemTitle} which has the imdb id ${imdbId}.`,
    "Do not ever mention the imdb id!",
  ];

  if (mood in moodInstructions) {
    poemPromptInstructions.push(moodInstructions[mood]);
  }

  return poemPromptInstructions.join(" ");
}
