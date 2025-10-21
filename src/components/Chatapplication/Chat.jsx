import { Link } from "react-router-dom"
import Chatapp from "../../assets/chatapp.png"
const Chat = () => {
  return (
    <div>
      <div className="flex justify-center mt-40 md:mt-65">
        <Link to = "/register"><img src={Chatapp} alt="" /></Link>
      </div>
      <div className="flex justify-center mt-2 font-bold text-[25px] text-black">
        <button className="border-none py-2.5 px-10 rounded-lg shadow-[-3px_8px_24px_4px_rgba(0,0,0,0.64)] hover:bg-black hover:text-white transition duration-500 ">
          <Link to = "/register"><p>Get Started</p></Link></button>
      </div>
    </div>
  )
}

export default Chat