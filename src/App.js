import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Messages from './Pages/Messages'
import Dashboard from './Pages/Dashboard';
import InputMsg from './Components/InputMsg';
import GlobalStyle from './globalStyles.js';
import Page404 from './Pages/Page404';
import Home from './Pages/Home';
import Admin from './Pages/Admin';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mensagens">
            <Messages />
          </Route>
          <Route path="/novamensagem">
            <InputMsg/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
      </>
  );
}

export default App;
