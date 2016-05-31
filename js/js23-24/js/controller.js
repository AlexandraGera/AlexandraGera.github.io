define(
  'controller',
  ['jquery'],
  function() {

    return function Controller(model, view) {
      var self= this;

      view.elements.addBtn.on('click' , addItem);
      view.elements.btnChange.on('click' , changeItem);
      view.elements.listContainer.on('click', '.item-delete' , removeItem);
      view.elements.listContainer.on('click', '.item-exchange' , selectTextItem);
      function addItem() {

        var newItem=view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }
      function removeItem() {
        var item=$(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
      }
      function selectTextItem() {
        var item=$(this).attr('data-value');
        var index=$(this).attr('data-index');
        model.activeItem(index);
        view.inputText(item);
      }
      function changeItem() {
        var newValue=view.elements.input.val();
        model.rewriteItem(newValue);
        view.renderList(model.data);
        view.elements.input.val('');
      }
    };
  }
);
