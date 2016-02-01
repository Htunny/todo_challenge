describe('ToDoCheckListController', function() {
  beforeEach(module('ToDoCheckList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoCheckListController');
  }));

  it('initialises with an empty check list', function() {
    expect(ctrl.inputText).toBeUndefined();
  });

  it('displays an list item', function() {
    ctrl.inputText = 'learn angular';
    ctrl.addItem(action);
    expect(ctrl.actionList).toEqual('learn angular');
  })

});
