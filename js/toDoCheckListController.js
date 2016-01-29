todoList.controller('ToDoCheckListController', [function() {

  var self = this;

  self.addItem = function(item) {
    Add.query(self.inputText)
     .then(function() {
       self.itemResult = response.data;
     });

  };
}]);
