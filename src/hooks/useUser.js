import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";

function useUser(enabled = false, initialData) {
  const queryClient = useQueryClient();

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
  });

  return { userInfo, signUp, logIn, updateUserInfo };
}

export default useUser;
