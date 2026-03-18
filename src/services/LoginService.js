const basedURL = process.env.NEXT_PUBLIC_API_URL;

const login = async (username, password) => {
  const res = await fetch(`${basedURL}/api/login`, {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return res.json();
};

const logout = async () => {
  const res = await fetch(`${basedURL}/api/login`, {
    method: "DELETE",
  });

  return res.json();
};

export { login, logout };
