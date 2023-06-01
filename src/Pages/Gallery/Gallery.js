import React from 'react'
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import GalleryIdx from './indexG';

const Gallery = (props) => {
    const [posts, setPosts] = useState(null)

    const galleryUrl = process.env.REACT_APP_GALLERY_URL

    const getPosts = async () => {
        const response = await fetch (galleryUrl)
        const data = await response.json()
        setPosts(data.data)
    }

    useEffect(()=>{
        getPosts()
    }, [])

  return (
   <section>
    <Routes>
        <Route path='/' element = {<GalleryIdx posts = {posts} />}/> 
    </Routes>
   </section>
  )
}

export default Gallery