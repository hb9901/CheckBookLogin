import { create } from "zustand";

const userStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user }),
  setLoggedIn: (isAuthenticated) => set({ isAuthenticated }),
  logOut: () => {
    localStorage.removeItem("accessToken");
    set({user: null, isAuthenticated: false});
  }
}));

export default userStore;