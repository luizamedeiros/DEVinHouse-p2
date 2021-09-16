import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import MsgForm from './Components/MsgForm';
import InputMsg from './Components/InputMsg';
import GlobalStyle from './globalStyles.js';
import Page404 from './Pages/Page404';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <MsgForm />
          </Route>
          <Route path="/novamensagem">
            <InputMsg/>
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
