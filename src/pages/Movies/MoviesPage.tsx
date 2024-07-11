import { Link, useParams } from 'react-router-dom';
import CalendarIcon from '../../assets/Icons/CalendarIcon.svg';
import ClapperboardIcon from '../../assets/Icons/ClapperboardIcon.svg';
import StarIcon from '../../assets/Icons/StarIcon.svg';
import ArrowBack from '../../assets/Icons/ArrowBack.svg';
import { GetMovieById } from '../../common/helpers/GetMovieById';

const MoviesPage = () => {
  const {id} = useParams();
  const MovieSelected = GetMovieById(Number(id));

  return (
    <div className='MoviesPageContainer'>
      <Link to={'/'} className='MoviesPageContainer--iconBack'>
        <img src={ArrowBack} alt="Volver" />
      </Link>
      <div className='MoviesPageContainer__left'>
        <img src={`https://image.tmdb.org/t/p/w300/${MovieSelected?.poster_path}`} alt="" />
      </div>
      <div className='MoviesPageContainer__right'>
        <div>
          <div>
            <h1 className='MoviesPageContainer__right--title'>{MovieSelected?.title}</h1>
            <p className='MoviesPageContainer__right--category'><span className='MoviesPageContainer--span'>Idioma Original:</span> {MovieSelected?.original_language}</p>
          </div>
          <span className='MoviesPageContainer--span'>Resumen:</span>
          <p className='MoviesPageContainer__right--description'>{MovieSelected?.overview}</p>
        </div>

        <div>
          <hr />
          <div className='MoviesPageContainer__footer'>
            <img src={CalendarIcon} alt="" />
            <p><span className='MoviesPageContainer--span'>Release Date:</span> {MovieSelected?.release_date}</p>
          </div>
          <div className='MoviesPageContainer__footer'>
            <img src={ClapperboardIcon} alt="" />
            <p><span className='MoviesPageContainer--span'>Popularidad:</span> {MovieSelected?.popularity}</p>
          </div>
          <div className='MoviesPageContainer__footer'>
            <img src={StarIcon} alt="" />
            <p><span className='MoviesPageContainer--span'>Ranking:</span> {MovieSelected?.vote_average}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MoviesPage;