import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import Save from "./component/Save";

function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("nature");

  const API_KEY = "3vk5SDHtERxa8aDtIGFjYzdSXssKQWoDwLvBwL0sbZO0LiBundvLSwiG";

  const fetchImages = async () => {

    const res = await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=30`,

      {
        headers: {
          Authorization: API_KEY
        }
      }
    );
    console.log(res.data.photos);
    setImages(res.data.photos);
    console.log(images);


  }

  useEffect(() => {
    fetchImages();
  }, [search])

  return (
    <>
      <Router>
      <Navbar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home images={images} />} />
          <Route path="/save" element={<Save />} />

        </Routes>
      </Router>
    </>
  );

}

export default App;