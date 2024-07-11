import { useContext } from "react"
import { AppContext } from "../context/AppContextProvider"
import { FavoriteData, Results } from "../utils/types";

export const GetMovieById = (id:number) => {
  const {seccionSelected, searchData, mostViewed, favoriteData} = useContext(AppContext);
  if(seccionSelected === 'Resultado de Busqueda'){
    const {data} = searchData;
    return data?.results?.filter((result:Results) => result?.id === id)[0];
  }

  if(seccionSelected === 'Lo mas visto'){
    const {data} = mostViewed;
    return data?.results?.filter((result:Results) => result?.id === id)[0];
  }

  if(seccionSelected === 'Mis Favoritos'){
    const {data} = favoriteData;
    return data?.filter((result:FavoriteData) => result?.id === id)[0];
  }
  return null;
}