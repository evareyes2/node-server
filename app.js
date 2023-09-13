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
      const task = new Task(description);
      this.tasks.push(task);
    }
  
    completeTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].completed = true;
      }
    }
  
    deleteTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
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
  
  taskList.addTask('Estudiar');
  taskList.addTask('Hacer mercado');
  taskList.addTask('Leer un libro');
//   taskList.addTask('');
  
  taskList.listTasks();
  
  taskList.completeTask(0);
  taskList.listTasks();
  
  taskList.deleteTask(1);
  taskList.listTasks();
  