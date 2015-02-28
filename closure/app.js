goog.provide('stockmvc');
goog.require('stockmvc.model.StockItem');
goog.require('stockmvc.model.StockItemStore');
goog.require('stockmvc.control.StockItemsControlRenderer');
goog.require('stockmvc.control.StockItemsControl');



/**
 * @type {stockmvc.model.StockItemStore}
 */
var itemStore = new stockmvc.model.StockItemStore();
itemStore.load(function() {
	
	//set up our custom renderer that will be used to manage our View of Stock related items
	var renderer = new stockmvc.control.StockItemsControlRenderer(document.getElementById('stock-list'));

	//pull all stock items from the store
	var items = itemStore.getAll();

	if (!goog.object.isEmpty(items)) {
		
		goog.array.forEach(items, function(item) {
			/**
			 * @type {stockmvc.control.StockItemControl}
			 */
			var control = new stockmvc.control.StockItemsControl(renderer);
			control.setModel(item);
			control.render(document.getElementById('stock-list-main'));
		});

	}


 });
