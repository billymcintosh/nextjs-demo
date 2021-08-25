export { }

// import { Button } from '@material-ui/core'
// import useStore from '@store/useStore'
// import { SetStateAction, useState } from 'react'

// const Test = (): JSX.Element => {
//   const fishes = useStore((state) => state.sets)
//   const eatFish = useStore((state) => state.eatFish)
//   const repopulate = useStore((state) => state.repopulate)

//   const [result, setResult] = useState<SetStateAction<string>>('Don\'t know')

//   // const [fishes, eatFish, repopulate] = useStore((state) => ([state.sets, state.eatFish, state.repopulate]))
//   const compare = (a, b): void => {
//     setResult(a > b ? 'Higher' : 'Same')

//     // return a === b
//   }
//   const treats = useStore(
//     (state) => state.sets,
//     (oldSets, newSets) => compare(oldSets, newSets),
//   )

//   return (
//     <div className="Mountain">
//       <p>
//         Treats:
//         {treats} [{result}]
//         {' '}
//         -
//         {fishes}
//       </p>
//       <p>
//         <Button onClick={eatFish}>Eat</Button>
//       </p>
//       <p>
//         <Button onClick={repopulate}>Repopulate</Button>
//       </p>
//     </div>
//   )
// }

// export default Test
