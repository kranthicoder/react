import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'

const Home = () => <div><h1>Home</h1><Links/></div>
const AboutUs = () => <div><h1>AboutUs</h1><Links/></div>
const ContactUs = () => <div><h1>ContactUs</h1><Links/></div>

const Links = () =>
  <nav>
    <Link to="/Home">Home</Link>
    <Link to="/AboutUs">AboutUs</Link>
    <Link to="/ContactUs">ContactUs</Link>
  </nav>

const App = () => {
  return(
    <Router history={ browserHistory }>
      <Route path="/Home" component={Home}></Route>
      <Route path="/AboutUs" component={AboutUs}></Route>
      <Route path="/ContactUs" component={ContactUs}></Route>
    </Router>
  )
}

export default App;