const baseHost = "https://wedev-api.sky.pro/api/kanban";

// Получение списка задач
export async function getTodos({ token }) {
    const response = await fetch(baseHost, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.status === 200) {
      throw new Error("Ошибка")
    }
  
    const data = await response.json();
    return data;
  }


  //Добавление списка задач
export async function addTask ({ token, task }) {
    const response = await fetch(baseHost, {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("Ошибка при добавлении задачи")
    }

    return response.json()
}

//Редактирование задачи
export async function editTask ({ token, task, id }) {
  const response = await fetch(`${baseHost}/${id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
          Authorization: `Bearer ${token}`
      }
  })

  if (!response.ok) {
      throw new Error("Ошибка при редактировании задачи")
  }

  return response.json()
}
