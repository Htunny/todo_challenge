todoList.controller('ToDoCheckListController', [function() {

  var self = this;

    self.actionList = [];

    self.getTotalList = function () {
    return self.actionList.length;
  };

    self.addItem = function(actionname){
      self.actionList.push({action: actionname, completed: false})
    };

    self.actionDone = function(actionnumber){
      self.actionList[actionnumber].completed = !self.actionList[actionnumber].completed
    }

    self.deleteAction = function(actionnumber){
      self.actionList.splice(actionnumber, 1)
    }

    self.clearList = function(){
      self.taskList = [];
    }
}]);
