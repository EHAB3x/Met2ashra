import { useNavigate } from "react-router-dom"
import { Button } from "../../ui/button"
import RoadmapLoginImg from "@assets/images/RoadmapLogin.png"
const RoadmapLogin = () => {
    const navigate = useNavigate()
  return (
    <div className="container mx-auto flex flex-col justify-center mt-6">
        <h1 className="text-center font-semibold text-[32px]">Please log in to access the Roadmap</h1>

        <div className="flex justify-center">
            <img 
                src={RoadmapLoginImg} 
                alt="RoadmapLogin" 
                className="max-h-[400px]"
            />
        </div>

        <Button 
            variant="primary" 
            className="w-fit mx-auto mb-6"
            onClick={()=> navigate("/login")}
        >
            Login Now
        </Button>
    </div>
  )
}

export default RoadmapLogin