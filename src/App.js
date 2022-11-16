import './App.css';
import  GlobalStyles  from './globalStyles/GlobalStyles';
import Logo from './components/clase-06/logo/Logo';
import Counter from './components/clase-07/components/counter/Counter';
import { Provider } from 'react-redux'
import store from './components/clase-07/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>

      <Logo />
      <GlobalStyles />
    </>
  );
}

export default App;
