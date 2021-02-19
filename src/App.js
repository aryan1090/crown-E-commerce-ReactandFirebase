import { Switch,Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.coponent'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
