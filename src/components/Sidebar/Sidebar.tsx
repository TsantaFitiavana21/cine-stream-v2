import { MenuItem } from "../MenuItem/MenuItem"
import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from "@mui/icons-material/Explore"
import PeopleIcon from "@mui/icons-material/People"
import UpcomingIcon from "@mui/icons-material/Upcoming"
import FavoriteIcon from "@mui/icons-material/Favorite"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import SettingsIcon from "@mui/icons-material/Settings"
import LogoutIcon from "@mui/icons-material/Logout"

import "./sidebarStyle.scss"

export const Sidebar = () => {
    return (
        <div className="side_main">

            <div className="menu_container">
                <div className="title">Menu</div>
                <div className="content">
                    <MenuItem icon={<HomeIcon />} text={"Home"} />
                    <MenuItem icon={<ExploreIcon />} text={"Discover"} />
                    <MenuItem icon={<UpcomingIcon />} text={"Coming soon"} />
                    <MenuItem icon={<FavoriteIcon />} text={"Wish List"} />
                </div>
            </div>

            <div className="menu_container">
                <div className="title">Socials</div>
                <div className="content">
                    <MenuItem icon={<GroupAddIcon />} text={"Friends"} />
                    <MenuItem icon={<PeopleIcon />} text={"Community"} />
                </div>
            </div>

            <div className="menu_container">
                <div className="title">General</div>
                <div className="content">
                    <MenuItem icon={<SettingsIcon />} text={"Settings"} />
                    <MenuItem icon={<LogoutIcon />} text={"Logout"} />
                </div>
            </div>
        </div>
    )
}
