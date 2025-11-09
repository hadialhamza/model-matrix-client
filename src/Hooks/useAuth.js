import { use } from "react";
import AuthContext from "../Context/AuthContext";

// this is a custom hook, used for call the auth context
const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default useAuth;
