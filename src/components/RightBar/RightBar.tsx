import { AvatarBox } from "../AvatarBox/AvatarBox"
import { MovieCard } from "../MovieCard/MovieCard"
import "./rightbarStyle.scss"

export const RightBar = () => {
    return (
        <div className="right_main">
            <AvatarBox
                email="test@test.com"
                image={"/assets/img/profile.jpg"}
                name="Tsanta Ratolojanahary"
            />

            <div className="title">Top Movies</div>

            <div className="list">
                {[1, 2, 3].map((_, index) => (
                    <MovieCard
                        key={index}
                        duration="2h30"
                        image="/assets/img/kong.webp"
                        nbStars={2}
                        title="Kong vs Godzilla"
                        year="2014"
                    />
                ))}
            </div>
        </div>
    )
}
