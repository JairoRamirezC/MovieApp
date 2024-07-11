import { useContext, useEffect, useRef, useState } from "react";
import ImageEmpty from "../../assets/images/image_empty.avif";
import { CardDescriptionInterface } from "../../common/utils/types";
import { useNavigate } from "react-router-dom";
import { FormatData } from "../../common/helpers/FormatData";
import { AppContext } from "../../common/context/AppContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

const CardDescription = ({
  id,
  image,
  title,
  titleMovie,
  description,
  rating,
  date,
}: CardDescriptionInterface) => {
  const { setSeccionSelected, setFavoriteValue } = useContext(AppContext);
  const [ratingStyle, setRatingStyle] = useState<string>("");
  const [dateFormated, setDateFormated] = useState<string>("");
  const [ratingCalculation] = useState<number>(Math.round(rating * 10) / 10);
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let ratingValue: string = "low";
    if (ratingCalculation >= 8) {
      ratingValue = "high";
    }
    if (ratingCalculation >= 4 && ratingCalculation < 8) {
      ratingValue = "medium";
    }
    setRatingStyle(ratingValue);
    setDateFormated(FormatData(date));
  }, []);

  const handleClickCard = () => {
    setSeccionSelected(title);
    navigate(`/movie/${id}`, {
      replace: false,
    });
  };

  const handleLike = () => {
    setLiked(!liked);
    if (timeoutRef?.current) {
      clearTimeout(timeoutRef?.current);
    }

    // @ts-ignore
    timeoutRef.current = setTimeout(() => {
      setFavoriteValue((lastValue) => {
        if (!liked) {
          return [...lastValue, id];
        } else {
          return lastValue?.filter((value) => value !== id);
        }
      });
    }, 300);
  };

  return (
    <>
      <IconButton
        onClick={handleLike}
        color="primary"
        sx={{
          position: "relative",
          backgroundColor: "rgba(0,0,0,0.8)",
          left: "280px",
          width: 40,
          height: 40,
          zIndex: 2,
        }}
      >
        {liked ? (
          <FavoriteIcon
            sx={{
              width: 30,
              height: 30,
            }}
          />
        ) : (
          <FavoriteBorderIcon
            sx={{
              width: 30,
              height: 30,
            }}
          />
        )}
      </IconButton>
      <div className="CardDescriptionContainer" onClick={handleClickCard}>
        <img
          src={image ? `https://image.tmdb.org/t/p/w400/${image}` : ImageEmpty}
          alt="image_movie"
          className="CardDescriptionContainer--image"
        />
        <div className="CardDescriptionContainer__info">
          <div className="CardDescriptionContainer__info__rating">
            <span
              className={`CardDescriptionContainer__info__rating--rating-${ratingStyle}`}
            >
              {ratingCalculation}
            </span>
            <span>{dateFormated}</span>
          </div>
          <h3 className="CardDescriptionContainer__info--title">
            {titleMovie}
          </h3>
          <p className="CardDescriptionContainer__info--description">
            {description ? description : "Sin datos..."}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDescription;
