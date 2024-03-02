import Home from './Components/Home.jsx';
import Education from './Components/Education.jsx';
import WorkProject from './Components/WorkProject.jsx'
import Skills from './Components/Skills.jsx'
import GetInTouch from './Components/GetInTouch.jsx'
import NoPage from './Components/NoPage.jsx';
import Blog from './Components/Blog.jsx';
import NavBar from './NavBar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="Home" element={<Home />} /> */}
        <Route path="Education" element={<Education />} />
        <Route path="WorkProject" element={<WorkProject />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="GetInTouch" element={<GetInTouch />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
