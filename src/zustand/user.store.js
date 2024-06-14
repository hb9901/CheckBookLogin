import { create } from "zustand";

const useUserStore = create((set) => ({
  isAuthenticated: localStorage.getItem("accessToken") ? true : false,
  setLogIn: (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    set({ isAuthenticated: true });
  },
  setLogOut: () => {
    localStorage.removeItem("accessToken");
    set({ isAuthenticated: false });
  },
}));

export default useUserStore;
