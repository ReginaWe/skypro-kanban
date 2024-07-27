
export const API = {
  baseHost: "https://wedev-api.sky.pro/api/kanban",

  // Получение списка задач
  async getTodos({ token }) {
    const response = await fetch(this.baseHost, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.status === 200) {
      throw new Error("Ошибка")
    }
  
    const data = await response.json();
    return data;
  },

  //Добавление списка задач
  async addTask ({ token, task }) {
    const response = await fetch(this.baseHost, {
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
  },

  //Редактирование задачи
  async editTask({ token, task, id }) {
    const response = await fetch(`${this.baseHost}/${id}`, {
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
  },

  //Удаление задачи
  async deleteTask({ token, id }) {
    const response = await fetch(`${this.baseHost}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  
    if (!response.ok) {
      throw new Error("Ошибка при удалении задачи")
    }
  
    return response.json()
  },
}
