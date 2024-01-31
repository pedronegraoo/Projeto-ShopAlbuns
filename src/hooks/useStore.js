import { useContext } from "react";
import { AppContext } from "../context/Provider";

function useStore() {
  return useContext(AppContext);
}

export default useStore;
