define(
	'model',
	['jquery'],
	function() {

		return function Model(data) {
			var self=this;
			self.data=data;
			self.active=-1;

			self.addItem= function(item) {

				if(item.length===0){
					return;
				};

				self.data.push(item);

				return self.data;
			};

			self.removeItem= function(item) {
				var index= self.data.indexOf(item);

				if (index===-1){
					return;
				};

				self.data.splice(index, 1);

				return self.data;
			};
			self.activeItem=function(index) {
				self.active= index;
			}
			self.rewriteItem=function(newValue){
				self.data[self.active]=newValue;

			};
		};
	}
);