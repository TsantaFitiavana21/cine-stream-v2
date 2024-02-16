import "./MovieCardStyle.scss"
import StarOutlinedIcon from "@mui/icons-material/StarOutlined"

export const MovieCard = ({
    duration,
    image,
    title,
    nbStars,
    year,
}: MovieCardProps) => {
    return (
        <div className="movie_card__container">
            <div className="image">
                <img src={image} alt="movie picture" />
            </div>
            <div className="summary">
                <div>{title}</div>
                <div className="stars">
                    {Array(nbStars).fill(nbStars).map((el, index) => (
                        <StarOutlinedIcon className="star__icon" key={el+index} />
                    ))}
                </div>
                <div className="info">
                    <div className="year">{year}</div>
                    <div className="time">{duration}</div>
                </div>
            </div>
        </div>
    )
}

type MovieCardProps = {
    image: string
    title: string
    nbStars: number
    year: string
    duration: string
}
