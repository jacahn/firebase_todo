"use strict";

(function(){
  angular
    .module("todoApp", ["firebase"])
    .controller("TodoController",
    ["$firebaseArray", TodoControllerFunc]);

    function TodoControllerFunc($firebaseArray){
      console.log("hello!");
      var vm = this;
      var ref = firebase.database().ref().child("todos");
      vm.todos = $firebaseArray(ref);

      vm.newTodo = function(){
        vm.todos.$add({
          text: vm.newTodoText
        }).then(function(){
          vm.newTodoText="";
        })
      }

      vm.update = function(todo){
        vm.todos.$save(todo);

      }
      vm.destroy = function(todo){
        vm.todos.$remove(todo);

      }
    }
})();
