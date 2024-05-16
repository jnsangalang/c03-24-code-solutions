import { PokemonList } from './PokemonList';
import './App.css';

export default function App() {
  type Props = [
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
  const pokedex: Props = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ];
  return (
    <>
      <PokemonList pokedex={pokedex} />
    </>
  );
}
