import { useAuth } from "./Providers/AuthProvider";

const UserProfile = () => {
  const { state } = useAuth();

  return state.user;
};

export default UserProfile;
