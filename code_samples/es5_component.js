(function () {
    'use strict';

    angular
        .module('ToodApp')
        .component('TodoComponent', {
            templateUrl: './todo.html',
            controller: TodoComponent
        });

    TodoComponent.$inject = 'TodoService';
    function TodoComponent (TodoService) {
        var vm = this;

        vm.$onInit = function () {
            vm.newTodo = vm.getNewTodo();
            vm.todos = [];
            TodoService.getTodos(function (response) {
                vm.todos = response;
            });
        };

        vm.addTodo = function (todo) {
            if (!todo) {
                return;
            }

            vm.todos.unshift(todo);
            vm.newTodo = vm.getNewTodo();
        };

        vm.getNewTodo = function () {
            return {
                title: '',
                selected: false
            };
        }
    }
})();
