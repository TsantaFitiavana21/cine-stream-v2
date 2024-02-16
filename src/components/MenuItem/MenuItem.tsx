import "./menuItemStyle.scss"

export const MenuItem = ({icon, text}: MenutItemProps) => {
  return (
    <div className="menu_item_main">
        <span className="icon"> {icon} </span>
        <span className="text"> {text} </span>
    </div>
  )
}

type MenutItemProps = {
    icon: React.ReactNode
    text: string
}