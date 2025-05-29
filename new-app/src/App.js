import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";

// Додаткові компоненти, якщо будеш створювати
// import TeamPage from './Pages/TeamPage';
// import BlogPost1 from './Pages/BlogPost1';

function App() {
  return (
    <Router>
      <Header />

      {/* Головний контейнер (опціонально) */}
      <div style={{ paddingTop: "70px" }}> {/* Щоб navbar не перекривав контент */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />

          {/* Додаткові маршрути (можеш реалізувати пізніше) */}
          {/* <Route path="/team" element={<TeamPage />} />
          <Route path="/blog/post1" element={<BlogPost1 />} /> */}

          {/* 404 сторінка (опційно) */}
          <Route path="*" element={<h2 className="text-center mt-5">Сторінку не знайдено</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
