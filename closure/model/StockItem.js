goog.provide('stockmvc.model.StockItem');

/**
 * The model object representing a stock item
 *
 * @param {string} symbol 
 * @param {string=} name 
 * @param {string=} change
 * @constructor
 */
stockmvc.model.StockItem = function(symbol, name, change) {
    /**
     * @private
     * @type {!string}
     */
    this.symbol_ = symbol;

    /**
     * @private
     * @type {!string}
     */
    this.name_ = name || 'n/a';

    /**
     * @private
     * @type {!number}
     */
    this.change_ = change || 0;
};

/**
 * @return {!string} the symbol associated with this stock item
 */
stockmvc.model.StockItem.prototype.getSymbol = function() {
    return this.symbol_;
};

/**
 * @return {!string} the name associated with this stock item
 */
stockmvc.model.StockItem.prototype.getName = function() {
    return this.name_;
};

/**
 * @return {!number} get the stock change associated with stock item
 */
stockmvc.model.StockItem.prototype.getChange = function() {
    return this.change_;
};

/**
 * @Param{!string} symbol for this stock item
 */
stockmvc.model.StockItem.prototype.setSymbol = function(symbol) {
    this.symbol_ = symbol;
};

/**
 * @Param{!string} name associated with this stock item.
 */
stockmvc.model.StockItem.prototype.setName = function(name) {
    this.name_ = name;
};

/**
 * @Param{!number} change associated with the stock item.
 */
stockmvc.model.StockItem.prototype.setChange = function(change) {
    this.change_ = change;
};