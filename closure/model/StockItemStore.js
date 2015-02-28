goog.provide('stockmvc.model.StockItemStore');

goog.require('goog.array');
goog.require('goog.storage.Storage');
goog.require('goog.net.XhrIo');
goog.require('goog.string');
goog.require('goog.ui.Component');
goog.require('goog.ui.Control');
goog.require('stockmvc.model.StockItem');

/**
 * Stores Stock Related Items 
 * @param{string=} routeUrl where we will pull stock data
 * @constructor
 */
stockmvc.model.StockItemStore = function(routeUrl) {
 
    /**
     * @type {string}
     * @private
     */
    this.routeUrl_ = (routeUrl) ? routeUrl : stockmvc.model.StockItemStore.defaultRoute;

    /**
     * @type {!Array.<stockmvc.model.Stockitem>}
     * @private
     */
    this.items_ = [];

};

/**
 * Default yahoo finance url to load data 
 * @const 
 */
stockmvc.model.StockItemStore.defaultRoute = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";

/**
 * Load stock items from a set url location
 * @param{function=} opt_callback after load is complete
 */
stockmvc.model.StockItemStore.prototype.load = function(opt_callback) {

	if (!this.routeUrl_) {
        this.routeUrl_ = stockmvc.model.StockItemStore.defaultRoute;
    }
	
    goog.array.clear(this.items_);
	
	goog.net.XhrIo.send(this.routeUrl_, goog.bind(function(e) {
		var xhr = e.target;
		var obj = xhr.getResponseJson();
		
		goog.object.forEach(obj.query.results.quote, goog.bind(function(data) {
			var item = new stockmvc.model.StockItem(data['Symbol'],data['Name'], data['Change']);
			this.items_.push(item);
		}, this));
		
		if(opt_callback) 
			opt_callback();
	},this));

};


/**
 * @return {Array.<stockmvc.model.StockItem>} All of the stored items.
 */
stockmvc.model.StockItemStore.prototype.getAll = function() {
    return this.items_;
};


