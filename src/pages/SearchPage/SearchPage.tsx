import { useContext } from 'react';
import {ErrorComponent, InputSearch, PreviewCards, SkeletonView} from '../../components';
import { AppContext } from '../../common/context/AppContextProvider';

const SearchPage = ():JSX.Element => {

  const {searchData, mostViewed, favoriteData} = useContext(AppContext);
  const {data, loading, error} = searchData;
  const {data: dataMostViewed, loading: loadingMostViewed} = mostViewed;
  const {data: dataFavoriteData, loading: loadingFavoriteData} = favoriteData;

  return (
    <>
      <InputSearch />
      {
        loading ?
          <SkeletonView />
        : data?.results?.length &&
          <div className='searchPageContainer'>
            <PreviewCards 
              title= 'Resultado de Busqueda'
              data= {data.results}
            />
          </div>
      }
      {
        loadingMostViewed ?
          <SkeletonView />
        : dataMostViewed?.results?.length &&
          <div className='searchPageContainer'>
            <PreviewCards 
              title= 'Lo mas visto'
              data= {dataMostViewed.results}
            />
          </div>
      }
      {
        loadingFavoriteData ?
          <SkeletonView />
        : dataFavoriteData?.length &&
          <div className='searchPageContainer'>
            <PreviewCards 
              title= 'Mis Favoritos'
              data= {dataFavoriteData}
            />
          </div>
      }
      {
        error && 
          (
            <ErrorComponent />
          )
      }
    </>
  )
}

export default SearchPage;