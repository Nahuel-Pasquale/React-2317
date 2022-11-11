import './App.css';
import  GlobalStyles  from './globalStyles/GlobalStyles';
import Logo from './components/clase-06/logo/Logo';
import { Counter } from './components/clase-06/counter/Counter';
import { CountContextProvider } from './components/clase-06/context/CountContext';



function App() {
  return (
    <>
      <CountContextProvider>
        <Counter />
      </CountContextProvider>
      <Logo />
      <GlobalStyles />
    </>
  );
}

export default App;
