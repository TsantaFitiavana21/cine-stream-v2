import "./App.css"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { RightBar } from "./components/RightBar/RightBar"
import { Feed } from "./components/Feed/Feed"

function App() {
    return <div className="app_main">
      <Sidebar/>
      <Feed />
      <RightBar />
    </div>
}

export default App
