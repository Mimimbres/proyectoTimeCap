import api from "./api";

const postLogin = async ({ email, password }) => {
  const { data } = await api.post("/auth/login", {
    email,
    password,
  });
  return data;
};

const postRegister = async ({ email, password }) => {
  const { data } = await api.post("/auth/register", {
    email,
    password,
  });
  return data;
};

const isUserLoggedIn = async () => {
  const { data } = await api.get("/auth/logged-in");
  return data;
}

const postLogout = async () => {
  await api.post("/auth/logout");
}

export { postLogin, postRegister, isUserLoggedIn , postLogout };
