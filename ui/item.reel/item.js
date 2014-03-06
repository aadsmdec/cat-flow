/**
 * @module ui/item.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Item
 * @extends Component
 */
exports.Item = Component.specialize(/** @lends Item# */ {
    constructor: {
        value: function Item() {
            this.super();
        }
    }
});
