type Colors = "red" | "yellow";

export function getCardsSuffix(color?: Colors, count?: number): string | undefined {
  if (color === undefined || count === undefined) return;
  
  const words: Record<Colors, string> = {
      'yellow': "жёлт",
      'red': "красн",
  }
  
  const wordPart = "карточ";
  let suffixes: [string, string];
  
  if (count % 10 === 1 && count % 100 !== 11) {
    suffixes = ['ая', 'ка'];
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    suffixes = ['ые', 'ки'];
  } else {
    suffixes = ['ых', 'ек'];
  }
  
  return `${words[color]}${suffixes[0]} ${wordPart}${suffixes[1]}`;
}
