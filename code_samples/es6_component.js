import templateUrl from './todo.html';

class TodoComponent {
    constructor (TodoService) {
        'ngInject';
        this.todoService = TodoService;
    }

    $onInit () {
        this.newTodo = this.getNewTodo();
        this.todos = [];
        this.todoService.getTodos(response => this.todos = response);
    }

    addTodo (todo) {
        if (!todo) {
            return;
        }

        this.todos.unshift(todo);
        this.newTodo = this.getNewTodo();
    }

    getNewTodo () {
        return {
            title: '',
            selected: false,
        };
    }
}

export {
    templateUrl,
    controller: TodoComponent
};