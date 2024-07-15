export function wordFrequencyCounter(str: string): Map<string, number> {
  const words = str.toLocaleLowerCase().split(/\W+/);
  const wordFrequency = new Map<string, number>();
  for (const word of words) {
    if (word === '') continue;
    if (wordFrequency.has(word)) {
      const frequency = wordFrequency.get(word) ?? 0;
      wordFrequency.set(word, frequency + 1);
    } else {
      wordFrequency.set(word, 1);
    }
  }
  return wordFrequency;
}
