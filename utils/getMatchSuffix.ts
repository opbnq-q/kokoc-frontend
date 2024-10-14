export function getMatchSuffix(count?: number): string | undefined {
  if (count === undefined) return;
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = ["матч", "матча", "матчей"];
  return titles[
    count % 100 > 4 && count % 100 < 20
      ? 2
      : cases[Math.min(count % 10, 5)]
  ];
}
