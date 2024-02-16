import { AvatarBox } from "../AvatarBox/AvatarBox"
import "./rightbarStyle.scss"
import profileImg from "../../../public/assets/img/profile.jpg"

export const RightBar = () => {
    return (
        <div className="right_main">
            <AvatarBox
                email="test@test.com"
                image={profileImg}
                name="Tsanta Ratolojanahary"
            />
        </div>
    )
}
