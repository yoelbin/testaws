import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface ICounterState {
  count: number
}
interface ICountAction {
  type: CountActionEnum,
  payload: number
}

enum CountActionEnum {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE'
}


const reducer = (state: ICounterState, action: ICountAction) => {
  switch (action.type) {
    case CountActionEnum.INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    case CountActionEnum.DECREASE:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      throw new Error('Action not supported')
  }
}

const initialState = { count: 2 }

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div className="App">
      asd

    </div>
  )
}

export default App
