import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import api from "../api/api";
import useUserStore from "../zustand/user.store";

function useUser(enabled = false, initialData) {
  const queryClient = useQueryClient();
  const { isAuthenticated, setLogIn, setLogOut } = useUserStore(
    useShallow((state) => ({
      isAuthenticated: state.isAuthenticated,
      setLogIn: state.setLogIn,
      setLogOut: state.setLogOut,
    }))
  );

  const { data: userInfo } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.user.getUserInfo(),
    enabled,
    initialData,
  });

  const { mutateAsync: signUp } = useMutation({
    mutationFn: (data) => api.user.signUp(data),
  });

  const { mutateAsync: logIn } = useMutation({
    mutationFn: (data) => api.user.logIn(data),
  });

  const { mutateAsync: updateUserInfo } = useMutation({
    mutationFn: (formData) => api.user.updateUserInfo(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError:(e) =>{
      alert(e);
    }
  });

  return {
    isAuthenticated,
    setLogIn,
    setLogOut,
    userInfo,
    signUp,
    logIn,
    updateUserInfo,
  };
}

export default useUser;
