goog.provide('stockmvc.control.StockItemsControlRenderer');
goog.require('goog.ui.Control');
goog.require('goog.net.XhrIo');
goog.require('stockmvc.view');
/**
 * A View renderer for the stock item control.
 *
 * @constructor
 * @param{Element} element on page to render stock items
 * @extends {goog.ui.ControlRenderer}
 */
stockmvc.control.StockItemsControlRenderer = function(element) {
    goog.ui.ControlRenderer.call(this);
	this.allowTextSelection_ = false;
    this.element = element;
};
goog.inherits(stockmvc.control.StockItemsControlRenderer, goog.ui.ControlRenderer);
goog.addSingletonGetter(stockmvc.control.StockItemsControlRenderer);


/**
 * @param {goog.ui.Control} create the stock list view representing stock items
 * @return {Element} Root element for the control.
 */
stockmvc.control.StockItemsControlRenderer.prototype.createDom = function(control) {
	
   var stockItem = control.getModel();
   var html = stockmvc.view.stockItem({
        symbol: stockItem.getSymbol(),
        name: stockItem.getName(),
		change: stockItem.getChange()
    });

    var main = this.element;
	var item = goog.dom.htmlToDocumentFragment(html);
	main.appendChild(item);
   this.controlHTML_ = main;
  return this.controlHTML_;
};







