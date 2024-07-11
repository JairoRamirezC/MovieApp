import { Navigate, Route, Routes } from "react-router-dom"
import {SearchPage, MoviesPage} from "../../pages";

const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<SearchPage />} />
      <Route path='/movie/:id' element={<MoviesPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default RouterApp