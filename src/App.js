import "./App.css";
import React from "react";
import { HomePage } from "./components/homePage/homePage";
import { PostMoreRender } from "./pages/PostMoreRender"
import { BlogPosts } from "./components/BlogPosts";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/posts" element={<BlogPosts/>}/>
        <Route path="/posts/:id" element={<PostMoreRender/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
