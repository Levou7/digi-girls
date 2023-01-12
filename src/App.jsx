import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Send from './components/Send/Send';
import NotFound from './components/NotFound/NotFound';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/send' element={<Send/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
