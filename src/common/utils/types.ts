import { ReactNode } from "react";

export interface InitialState {
  greating: boolean;
  searchData: SearchData;
  mostViewed: SearchData;
  setSearchData: React.Dispatch<React.SetStateAction<SearchData>>;
  inputSearchValue: string;
  getInputValue: (value:string) => void;
  setSeccionSelected: React.Dispatch<React.SetStateAction<string | null>>;
  seccionSelected: string | null;
  setFavoriteValue: React.Dispatch<React.SetStateAction<number[]>>;
  favoriteData: FavoriteDataInterface;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export interface Results {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Data {
  total_pages: number;
  total_results: number;
  page: number;
  results: Results[];
}

export interface SearchData {
  data: null | Data;
  loading: boolean;
  error: boolean;
}

export interface InputSearchDataContext {
  greating: boolean;
  setSearchData: ({data, loading, error}:SearchData) => void;
}

export interface PreviewCardsInterface {
  title: 'Resultado de Busqueda' | 'Lo mas visto' | 'Mis Favoritos';
  data: Results[] | FavoriteData[];
}

export interface CardDescriptionInterface {
  id: number;
  image: string; 
  title: 'Resultado de Busqueda' | 'Lo mas visto' | 'Mis Favoritos';
  titleMovie: string; 
  description: string;
  rating: number;
  date: string;
}


export interface FavoriteDataInterface {
  data: null | FavoriteData[];
  loading: boolean;
  error: boolean;
}

export interface FavoriteData {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: BelongsToCollection;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  origin_country:        string[];
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}

export interface BelongsToCollection {
  id:            number;
  name:          string;
  poster_path:   string;
  backdrop_path: string;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompany {
  id:             number;
  logo_path:      string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}