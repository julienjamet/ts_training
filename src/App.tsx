import { FC, createContext } from 'react'
import './App.css'
import { Person } from './components/Person'
import { EyesColor } from './Enums'

interface AppContextInterface {
  age: number,
  email: string
}

const AppContext = createContext<AppContextInterface | null>(null)

export const App: FC = () => {

  const contextValue: AppContextInterface = {
    age: 30,
    email: "julien@gmail.com"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person age={contextValue.age} email={contextValue.email} eyesColor={EyesColor.Vert} />
      </div>
    </AppContext.Provider>
  )
}
