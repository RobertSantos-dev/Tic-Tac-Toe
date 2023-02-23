import { Route, Switch } from 'react-router-dom';

import Header from './components/all/Header';
import Provider from './context/Provider';
import Start from './pages/Start';
import Match from './pages/Match';
import './styles/App.css';

function App() {
  return (
    <Provider>
      <Header />
      <Switch>
        <Route exact path='/' component={ Start } />
        <Route exact path='/match' component={ Match } />
      </Switch>
    </Provider>
  )
}

export default App;
