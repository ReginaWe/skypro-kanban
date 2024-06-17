const baseHost = "https://wedev-api.sky.pro/api/kanban";
const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

/* export function getTodos() {
    return fetch(baseHost, {
        method: "GET",
        headers: {
            Authorization: "Bearer ksdfsksdfjfsdjk"
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        return data.tasks
    })
} */

export async function getTodos() {
  const response = await fetch(baseHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}
