import { useAuth } from "../Hooks/Providers/AuthProvider";

const UserProfile = () => {
  const { state } = useAuth();

  return state.user;
};

export default UserProfile;
