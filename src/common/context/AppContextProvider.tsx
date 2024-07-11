import { createContext, useEffect, useState } from "react"
import { AppContextProviderProps, FavoriteData, FavoriteDataInterface, InitialState, SearchData } from "../utils/types";
import APIMoviesApp from "../utils/APIMoviesApp";

const initialState:InitialState = {
  greating: true, 
  searchData:{
    data: null,
    loading: false,
    error: false
  }, 
  setSearchData: () => {},
  inputSearchValue: '',
  getInputValue: () => {},
  mostViewed:{
    data: null,
    loading: false,
    error: false
  },
  setSeccionSelected: () => {},
  seccionSelected: '',
  setFavoriteValue: () => {},
  favoriteData: {
    data: null,
    loading: false,
    error: false
  },
}

export const AppContext = createContext(initialState);

const AppContextProvider = ({children}:AppContextProviderProps) => {
  const [greating] = useState<boolean>(true);
  const [searchData, setSearchData] = useState<SearchData>({
    data: null,
    loading: false,
    error: false
  });
  const [mostViewed, setMostViewed] = useState<SearchData>({
    data: null,
    loading: false,
    error: false
  });
  const [inputSearchValue, setInputSearchValue] = useState<string>('');
  const [seccionSelected, setSeccionSelected] = useState<string | null>(null);
  const [favoriteData, setFavoriteData] = useState<FavoriteDataInterface>({
    data: null,
    loading: false,
    error: false
  });
  const [favoriteValue, setFavoriteValue] = useState<number[]>([]);

  useEffect(() => {
    try {
      setMostViewed({
        data: null,
        loading: true,
        error: false
      })
      APIMoviesApp.getMostViewed()
      .then(({data}) => {
        if(data?.results?.length){
          setMostViewed({
            data,
            loading: false,
            error: false
          });
        }
      });
    } catch (error) {
      console.error('Error en AppContextProvider: ', error);
      setMostViewed({
        data: null,
        loading: false,
        error: true
      })
    }
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const timer = setTimeout(() => {
      try {
        APIMoviesApp.getSearchMovies(inputSearchValue)
        .then(({data}) => {
          if(inputSearchValue){
            setSearchData({
              data:null,
              loading: true,
              error: false
            }); 
          }
          if(data?.results?.length){
            setSearchData({
              data,
              loading: false,
              error: false
            });
          }
        });
      } catch (error) {
        console.error('Error fetching user data: ', error);
        setSearchData({
          data: null,
          loading: false,
          error: true
        });
      }  
    }, 500);
  
    return () => {
      abortController.abort();
      clearTimeout(timer);
    }
  }, [inputSearchValue]);


  useEffect(() => {
    try {
      setFavoriteData({
        data: null,
        loading: true,
        error: false,
      });
      Promise.all(
        favoriteValue.map((favoriteId) =>
          APIMoviesApp?.getMovieById(favoriteId).then((data) => data)
        )
      ).then((response) => {
        const data = response.map(({ data }) => data);
        setFavoriteData({
          data,
          loading: false,
          error: false,
        });
      });
    } catch (error) {
      setFavoriteData({
        data: null,
        loading: false,
        error: true,
      });
    }
  }, [favoriteValue]);
  

  const getInputValue = (value:string) => {
    setInputSearchValue(value);
  }

  return (
    <AppContext.Provider value={{
      greating, 
      searchData, 
      setSearchData,
      inputSearchValue,
      getInputValue,
      mostViewed,
      setSeccionSelected,
      seccionSelected,
      setFavoriteValue,
      favoriteData
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;