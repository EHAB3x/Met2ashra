import EditImg from "../components/common/EditImg";
import EditName from "../components/common/EditName";
import EditPassword from "../components/common/EditPassword";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const auth = useAuth();
  console.log(auth);

  return (
    <div className="flex sm:flex-row flex-col gap-4 container py-20">
      <div>
        <img 
          src={auth?.user?.user.image_link} 
          alt="" 
          className="w-[200px] h-[200px] rounded-full"
        />
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        {/* @ts-ignore */}
        <EditName userData={auth} />
        <EditImg />
        <EditPassword/>
      </div>

    </div>
  );
};

export default Profile;
