define(
  'view',
  ['jquery', 'template'],
  function() {

    return function View(model) {

      var self= this;

      function init() { 

        var wrapper= tmpl($('#wrapper-template').html());

        $('body').append(wrapper);

        self.elements= {
          input: $('.item-value'),
          addBtn: $('.item-add'),
          btnChange: $('.btn-change'),
          listContainer: $('.item-list')
        };

        self.renderList(model.data);

      };

      self.renderList =function(data) {

        var list= tmpl($('#list-template').html(), {data: data});

        self.elements.listContainer.html(list);
      };
      self.textItem = function() {
        var item=model.active;
        self.elements.input.val(item);
      };
      self.inputText=function(item){
        self.elements.input.val(item);
      };
      init();
    };
  }
);