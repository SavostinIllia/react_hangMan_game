export function popupMessage(
  correct: string[],
  wrong: string[],
  word: string
): string {
  let status: string = "win";
  // Check for win

  word.split("").forEach((letter: string) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });
  // Chek for lost

  if (wrong.length === 6) status = "lose";

  return status;
}
