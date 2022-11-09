import './App.css';
import { GeneralWrapper } from './components/clase-05/GeneralWrapper';
import { CtxProvider } from './components/clase-05/MiContexto';
import { Reducer } from './components/clase-05/Reducer';
import { SmallWrapper } from './components/clase-05/SmallWrapper';
import { GlobalStyles } from './globalStyles/GlobalStyles';



function App() {
  return (
    <>
      <CtxProvider>
        <GeneralWrapper>
          <SmallWrapper>
            <Reducer />
          </SmallWrapper>
        </GeneralWrapper>
      </CtxProvider>


      <GlobalStyles />
    </>
  );
}

export default App;
