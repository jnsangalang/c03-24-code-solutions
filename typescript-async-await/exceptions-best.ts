import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;



async function throwOnce():Promise<void>{
    const message = await read('foo', false);
    console.log(elapsed(), 'throwOnce:', message);
    throw new Error('error');
}

async function throwSeveral():Promise<void>{
  const message1 = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', message1);

  const message2 = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral2:', message2);

  const message3 = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral3:', message3);

    throw new Error('error');
}


async function throwChained(): Promise<void>{

    const message1 = await read('foo-chain', false);
      console.log(elapsed(), 'throwChained1:', message1);

    const message2 = await read(message1);
      console.log(elapsed(), 'readChained2:', message2);

    const message3 = await read(message2);
      console.log(elapsed(), 'readChained3:', message3);
       throw new Error('error');
}

try{
  await throwOnce();
  await throwSeveral();
  await throwChained();

}
catch(Error){
  console.error(elapsed(), 'throwOnce Error:', Error);
  console.error(elapsed(), 'throwSeveral Error:', Error);
  console.log(console.error(elapsed(), 'throwSeveral Error:', Error));

}
