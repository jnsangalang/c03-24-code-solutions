import {Props} from './App'

export function RotatingBanner({items}:Props){
console.log({items});
  return(
    <div>
      {items}
    </div>
  )
}
