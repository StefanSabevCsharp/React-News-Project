import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import LatestBlog from './components/latestBlog/LatestBlog';
import LatestNews from './components/latestNews/LatestNews';
import Footer from './components/footer/Footer';
import { Route, Router, Routes } from 'react-router';
import Main from './components/main/Main';
import World from './components/world/World';
import Article from './components/article/MainArticle';


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<LatestBlog />} />
        <Route path="/world" element={<Article name={"World News"} />} />
        <Route path="/tech" element={<Article name={"Tech News"}/>} />
        <Route path="/sport" element={<Article name={"Sport News"}/>} />
        <Route path="/culture" element={<Article name={"Culture News"}/>} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
