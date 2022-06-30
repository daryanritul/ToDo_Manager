import { useContext, useEffect } from 'react';
import Home from './Screens/Home/Home';
import { context } from './store/store';

const App = () => {
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state));
  }, [state]);

  return <Home />;
};

export default App;
