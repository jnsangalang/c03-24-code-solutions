/* exported truncate */
function truncate(length: number, string: string): string {
  return string.substring(0, length) + '...';
}
