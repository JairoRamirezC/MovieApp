import { useRef, useEffect, useState } from "react";
import CardDescription from "../CardDescription/CardDescription"
import { PreviewCardsInterface } from "../../common/utils/types";


export const PreviewCards = ({title, data}:PreviewCardsInterface) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [showArrows, setShowArrows] = useState<boolean>(false);

  const checkArrows = () => {
    const el = carouselRef.current;
    if (!el) return setShowArrows(false);
    setShowArrows(el.scrollWidth > el.clientWidth);
  };

  useEffect(() => {
    checkArrows();
    window.addEventListener('resize', checkArrows);
    return () => window.removeEventListener('resize', checkArrows);
  }, [data]);


  const scrollLeft = () => {
    if(carouselRef?.current){
      // @ts-ignore
      carouselRef?.current?.scrollBy({
        top: 0,
        // @ts-ignore
        left: -carouselRef?.current?.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if(carouselRef?.current){
      // @ts-ignore
      carouselRef?.current?.scrollBy({
        top: 0,
        // @ts-ignore
        left: carouselRef?.current?.clientWidth,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <>
      <h1>{title}</h1>
      <div className='previewCardsContainer'>
        <button style={{display: showArrows ? 'block' : 'none'}} className='previewCardsContainer--carouselButton previewCardsContainer--carouselButton--left' onClick={scrollLeft}>&lt;</button>
        <div className='previewCardsContainer__carousel' ref={carouselRef}>
          {
            data.map(({id, poster_path, title: titleMovie, overview, vote_average, release_date}) => {
              if(poster_path && title && overview && vote_average && release_date){
                return (
                  <CardDescription
                    key={id}
                    id= {id}
                    title= {title}
                    image= {poster_path}
                    titleMovie= {titleMovie}
                    description= {overview}
                    rating= {vote_average}
                    date= {release_date.toString()}
                  />
                )
              }
            })
          }
        </div>
        <button style={{display: showArrows ? 'block' : 'none'}} className='previewCardsContainer--carouselButton previewCardsContainer--carouselButton--right' onClick={scrollRight}>&gt;</button>
      </div>
    </>
  )
}