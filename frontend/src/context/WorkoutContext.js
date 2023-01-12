import { createContext } from 'react'

export const WorkoutsContext = createContext()

const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer()
  return (
    <WorkoutsContext.Provider value={{workouts: []}}>
      { children }
    </WorkoutsContext.Provider >
  )
}
