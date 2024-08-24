import EditImg from "../components/common/EditImg";
import EditName from "../components/common/EditName";
import EditPassword from "../components/common/EditPassword";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const auth = useAuth();
  console.log(auth);

  return (
    <div className="flex flex-col gap-4 container py-20">
      <EditName userData={auth} />
      <EditImg />
      <EditPassword />
    </div>
  );
};

export default Profile;
