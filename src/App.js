import './App.css';
import { ExampleFunct } from './components/clase-02/ExampleFunct';
import { StyledAccordeon } from './components/clase-03/StyledAccordeon';
// import { CssAccordeon } from './components/clase-03/CssAccordeon';
import { data } from './utils/data';
import { GlobalStyles } from './globalStyles/GlobalStyles';
import { Accordeon } from './components/clase-03/Accordeon';



function App() {
  return (
    <>
      <ExampleFunct />

      {/* <CssAccordeon items={data} /> */}
      <StyledAccordeon items={data} />
      <Accordeon />
      <GlobalStyles />
    </>
  );
}

export default App;
