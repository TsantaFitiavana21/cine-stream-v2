import "./AvatarBoxStyle.scss"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

export const AvatarBox = ({email, image, name}: AvatarBoxProps) => {
    return (
        <div className="avatarBox__container">
            <div className="image">
                <img src={image} alt="profil" />
            </div>
            <div className="info">
                <div className="name">{name}</div>
                <div className="mail">{email}</div>
            </div>
            <NotificationsNoneOutlinedIcon className="notification" />
        </div>
    )
}

type AvatarBoxProps = {
    image: string
    name: string
    email: string
}