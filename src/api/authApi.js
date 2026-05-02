const BASE_URL = "https://69f49364fb098eb7f0b48fe8.mockapi.io/users";

export const registerUser = async (email, password) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
};

export const loginUser = async (email, password) => {
  const res = await fetch(BASE_URL);
  const users = await res.json();

  return users.find(
    (u) => u.email === email && u.password === password
  );
};
