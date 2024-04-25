async function retrieveUsers(): Promise<void> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  });
  try {
    const users = await response.json();
    console.log('Array of users:', users);
  } catch {
    if (!response.ok) {
      const message = `Failed to get users, Error ${response.status}`;
      console.log(message);
      throw new Error(message);
    }
  }
}

async function retrievePokemon(): Promise<void> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/umbreon/', {
    method: 'GET',
  });
  try {
    const pokemon = await response.json();
    console.log('Favorite pokemon:', pokemon);
  } catch {}
  if (!response.ok) {
    const message = `Failed to get favorite pokemon, Error ${response.status}`;
    console.log(message);
    throw new Error(message);
  }
}

// try{
retrieveUsers();
retrievePokemon();
// }
// catch(error){
//     console.log(error);
// };
