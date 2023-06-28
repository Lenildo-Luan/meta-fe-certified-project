import './App.css';
import './assets/styles/reset.css'
import './assets/styles/typography.css'

import Header from './components/header'
import Nav from './Nav.js'
import Main from './Main.js'
import Footer from './Footer.js'

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
