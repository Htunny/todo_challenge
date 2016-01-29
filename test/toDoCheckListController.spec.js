describe('ToDoCheckListController', function() {
  beforeEach(module('ToDoCheckList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoCheckListController');
  }));

  it('initialises with an empty check list', function() {
    expect(ctrl.input).toBeUndefined();
  });

});
