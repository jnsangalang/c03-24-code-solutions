import React from 'react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};
export function SearchBar({ onChange, name }: Props) {
  return <input name={name} type="text" onChange={onChange}></input>;
}
