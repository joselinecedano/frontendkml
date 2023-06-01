import React from 'react'
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import GalleryIdx from './indexG';
import GalleryCrt from './createG';

const Gallery = (props) => {
    const [posts, setPosts] = useState(null)

    const galleryUrl = process.env.REACT_APP_GALLERY_URL

    const getPosts = async () => {
        const response = await fetch (galleryUrl)
        const data = await response.json()
        setPosts(data.data)
    }

    const createPost = async (post) => {
        await fetch (galleryUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        // update list of gallery posts
        getPosts()
    }

    
    useEffect(()=>{
        getPosts()
    }, [])

  return (
   <section>
    <Routes>
        <Route path='/' element = {<GalleryIdx posts = {posts} />}/> 
        <Route path='/form' element = {< GalleryCrt createPost = {createPost}/>} />
    </Routes>
   </section>
  )
}

export default Gallery