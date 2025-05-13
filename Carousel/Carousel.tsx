import React, { useEffect, useState } from "react"
import './Carousel.css'

export const Carousel = () =>{
    const images = [
        "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
        "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg",
        "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
        "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg",
      ];

      const [index, setIndex] =  useState(0);

      useEffect(()=>{
        const interval = setInterval(()=>{
            if(index === images.length-1){
                setIndex(0)
            }
            setIndex((prev)=>prev+1);
        }, 1000)

        return ()=> clearInterval(interval)
      })

      const nextButton = () =>{
        if(index === images.length-1){
            setIndex(0)
        }
        setIndex((prev)=>prev+1);
      }
      const prevButton = () =>{
        if(index === 0){
            setIndex(images.length-1);
        }
        setIndex((prev)=>prev-1)
      }
    return <div className="container">
        <button className="button" onClick={()=>prevButton()}>Prev</button>
         <img className="image" src={images[index]} />
        <button className="button" onClick={()=>nextButton()}>Next</button>
        </div>
}