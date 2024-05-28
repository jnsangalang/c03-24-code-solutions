type Props = {
  pokedex: [
    {
      number: string;
      name: string;
    },
    {
      number: string;
      name: string;
    },
    {
      number: string;
      name: string;
    },
    {
      number: string;
      name: string;
    },
    {
      number: string;
      name: string;
    }
  ];
};
export function PokemonList({ pokedex }: Props) {
  const listPokemon = pokedex.map((pokemon) => <li>{pokemon.name}</li>);

  return <ul>{listPokemon}</ul>;
}
