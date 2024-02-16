import Home from './routes/home/home.component'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navbar.componenet'
import Login from './routes/login/login.component'

const App = () => {
  return (
  <Routes>
    <Route path = "/" element = {<Navigation />}>
      <Route index element= {<Home />} /> 
      <Route path='sign-in' element={<Login />} />
    </Route>
  </Routes> 
  );
};



export default App;
