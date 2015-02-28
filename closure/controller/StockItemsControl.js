goog.provide('stockmvc.control.StockItemsControl');

/**
 * A custom controller class for working with stock items 
 * @param {stockmvc.control.StockItemsControlRenderer} renderer Custom Renderer builds up the dom structure for this control
 * @constructor
 * @extends {goog.ui.Control}
 */
stockmvc.control.StockItemsControl = function(renderer) {
    goog.ui.Control.call(this, '', renderer, null);

    // disable SELECTED states
    this.setSupportedState(goog.ui.Component.State.SELECTED, false);

    // disable auto handling SELECTED states
    this.setAutoStates(goog.ui.Component.State.SELECTED, false);

    // disable text selection
    this.setAllowTextSelection(false);
};
goog.inherits(stockmvc.control.StockItemsControl, goog.ui.Control);


/**
 * Configures the component after its DOM has been rendered, and sets up event
 * handling. Overrides {@link goog.ui.Component#enterDocument}.
 *
 * @override
 */
stockmvc.control.StockItemsControl.prototype.enterDocument = function() {
    stockmvc.control.StockItemsControl.superClass_.enterDocument.call(this);

    // todo: Here we can build up our event handlers and do additional work after view has been rendered

};

/**
 * Returns the renderer used by this component to render itself or to decorate
 * an existing element.
 *
 * @return {stockmvc.control.StockItemsControlRenderer} Renderer used by the
 * component.
 */
stockmvc.control.StockItemsControl.prototype.getRenderer = function() {
    return ( /**@type {stockmvc.control.StockItemsControlRenderer}*/ this.renderer_);
};