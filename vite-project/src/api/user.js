const userHost = " https://wedev-api.sky.pro/api/user";
/* const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck"; */



// Регистрация
export function register({ login, name, password }) {
  return fetch(userHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже есть");
    }
    return response.json();
  });
}

//Авторизация
export function login({ login, password }) {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }

    if (response.status === 500) {
      throw new Error("Ошибка на нашей стороне");
    }
  });
}
