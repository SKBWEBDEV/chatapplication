import { Link } from "react-router-dom"
import Chatapp from "../../assets/chatapp.png"
const Chat = () => {
  return (
    <div>
      <div className="flex justify-center mt-40 md:mt-65">
        <Link to = "/register"><img src={Chatapp} alt="" /></Link>
      </div>
      <div className="flex justify-center mt-2 font-bold text-[25px] text-[#FF4500]">
        <Link to = "/register"><p>Chat App</p></Link>
      </div>
    </div>
  )
}

export default Chat