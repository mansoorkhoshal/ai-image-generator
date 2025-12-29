import { surpriseMePrompts } from "./../constants/index";

export function getRandomPrompts(prompt) {
  if (!Array.isArray(surpriseMePrompts) || surpriseMePrompts.length === 0) {
    return "";
  }

  let randomPrompt = prompt;

  while (randomPrompt === prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    randomPrompt = surpriseMePrompts[randomIndex];
  }

  return randomPrompt;
}
