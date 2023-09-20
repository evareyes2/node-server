class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (description) {
          const task = new Task(description);
          this.tasks.push(task);
          resolve(task);
        } else {
          reject(new Error('La descripción de la tarea no puede estar vacía.'));
        }
      }, 2000);
    });
  }

  completeTask(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (index >= 0 && index < this.tasks.length) {
          this.tasks[index].completed = true;
          resolve();
        } else {
          reject(new Error('Índice de tarea inválido.'));
        }
      }, 1000);
    });
  }

  deleteTask(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (index >= 0 && index < this.tasks.length) {
          this.tasks.splice(index, 1);
          resolve();
        } else {
          reject(new Error('Índice de tarea inválido.'));
        }
      }, 4000);
    });
  }

  async runTaskList() {
    try {
      await this.addTask('Estudiar');
      await this.addTask('Hacer mercado');
      await this.addTask('Leer un libro');

      this.listTasks();

      await this.completeTask(0);
      this.listTasks();

      await this.deleteTask(1);
      this.listTasks();
    } catch (error) {
      console.error(error.message);
    }
  }

  listTasks() {
    console.log('\nLista de Tareas:');
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
    });
    console.log();
  }
}

const taskList = new TaskList();

taskList.runTaskList();


//   listTasks() {
//     console.log("\nLista de Tareas:");
//     this.tasks.forEach((task, index) => {
//       console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
//     });
//     console.log();
//   }
// }



// const taskList = new TaskList();

// taskList.addTask("Estudiar")
// .then(() => taskList.addTask('Hacer mercado'))
// .then(() => taskList.addTask('Leer un libro'))
// .then(() => taskList.listTasks())
// .then(() => taskList.completeTask(0))
// .then(() => taskList.listTasks())
// .then(() => taskList.deleteTask(1))
// .then(() => taskList.listTasks())
// .catch((error) => console.log(error.message));
// // taskList.addTask("Leer un libro");
//   taskList.addTask('');

// taskList.listTasks();

// taskList.completeTask(0);
// taskList.listTasks();

// taskList.deleteTask(1);
// taskList.listTasks();
