import { useRef } from "react";
import CardDescription from "../CardDescription/CardDescription"
import { PreviewCardsInterface } from "../../common/utils/types";


export const PreviewCards = ({title, data}:PreviewCardsInterface) => {
  const carouselRef = useRef(null);
  

  const scrollLeft = () => {
    if(carouselRef?.current){
      carouselRef?.current?.scrollBy({
        top: 0,
        left: -carouselRef?.current?.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if(carouselRef?.current){
      carouselRef?.current?.scrollBy({
        top: 0,
        left: carouselRef?.current?.clientWidth,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <>
      <h1>{title}</h1>
      <div className='previewCardsContainer'>
        <button className='previewCardsContainer--carouselButton previewCardsContainer--carouselButton--left' onClick={scrollLeft}>&lt;</button>
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
        <button className='previewCardsContainer--carouselButton previewCardsContainer--carouselButton--right' onClick={scrollRight}>&gt;</button>
      </div>
    </>
  )
}