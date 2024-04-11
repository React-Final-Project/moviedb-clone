
import './App.css';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
// import { Switch } from '@material-ui/core';    //为什么不能用switch组件
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import AnimatedCarousel from './AnimatedCarousel/AnimatedCarousel';

function App() {
  return (
    <BrowserRouter>

      <div className="app">
        
        <Container>
          <div>
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </Container>

        <SimpleBottomNavigation />

        <AnimatedCarousel />

      </div>

    </BrowserRouter>
  );
}

export default App;


