import Skeleton from '@mui/material/Skeleton';

export const SkeletonComponent = () => {
  return (
    <div>
      <Skeleton animation="wave" variant="rectangular" width={280} height={300} /><br />
      <Skeleton animation="wave" width={280} height={20} />
      <Skeleton animation="wave" width={280} height={50} />
    </div>
  )
}