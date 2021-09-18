import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import MsgForm from './Components/MsgForm';
import Dashboard from './Pages/Dashboard';
import InputMsg from './Components/InputMsg';
import GlobalStyle from './globalStyles.js';
import Page404 from './Pages/Page404';
import Home from './Pages/Home';

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
            <MsgForm />
          </Route>
          <Route path="/novamensagem">
            <InputMsg/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
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
