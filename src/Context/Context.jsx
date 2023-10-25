import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const Provider = createContext();

const Context = ({ children }) => {
  const addUserEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);

  }

  const authValue = {
    addUserEmailPass,
    userLogin,
  };

  return <Provider.Provider value={authValue}>{children}</Provider.Provider>;
};

Context.propTypes = {
  children: PropTypes.node,
};
export default Context;
