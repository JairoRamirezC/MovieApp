// import Grid from '@mui/material/Grid';

import {SkeletonComponent} from "./SkeletonComponent";

export const SkeletonView = () => {
  return (
    <div className='SkeletonViewContainer'>
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
      <SkeletonComponent />
    </div>
  )
}