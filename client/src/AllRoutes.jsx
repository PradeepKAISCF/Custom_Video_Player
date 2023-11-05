import React from 'react'
import {Routes,Route} from "react-router-dom"
import VideoUploader from "./pages/videoUpload/VideoUploader";
import Videoplayer from './pages/Videoplaye';
import Home from './pages/Home/Home';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/uploads' element={<VideoUploader/>}/>
        <Route path='/videopage/:vid' element={<Videoplayer/>}/>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
