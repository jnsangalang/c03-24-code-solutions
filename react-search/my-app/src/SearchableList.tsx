import { useState } from 'react';
import { Items } from './Items';
import { SearchBar } from './SearchBar';
import { quotes } from './Items';

export function SearchableList() {
  const [match, setMatch] = useState('');

  let filteredList = quotes.filter((string) =>
    string.toLowerCase().includes(match)
  );
  if (filteredList.length === 0) {
    filteredList = ['No results match your search'];
  } else {
    <div>{filteredList}</div>;
  }
  return (
    <>
      <div>SearchList</div>
      <SearchBar
        name="search"
        onChange={(e) => setMatch(e.target.value.toLowerCase())}
      />
      <Items quotes={filteredList} />
    </>
  );
}
