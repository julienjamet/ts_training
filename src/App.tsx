import {FC, createContext} from 'react';
import './App.css';
import { Person } from './components/Person';
import { EyesColor } from './Enums';

interface AppContextInterface {
  name: string,
  age: number,
  country: string
}

const AppContext = createContext<AppContextInterface | null>(null)

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: "Julien",
    age: 30,
    country: "France"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person name="Julien" age={30} email="julien@gmail.com" hairColor={EyesColor.Vert} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
