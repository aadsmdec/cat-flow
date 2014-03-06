/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    catImages: {
        value: []
    },
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    templateDidLoad: {
        value: function() {
            var component = this;
            window["catfn"] = function(jsonData) {
                var catImages = [];
                
                for (var i = 0; i < jsonData.data.children.length; i++) {
                    var item = jsonData.data.children[i];
                    
                    if (item.data.url.toLowerCase().match(/i.imgur.com\/[a-zA-Z0-9]+.(jpg|gif)/)) {
                        item.data.mediumUrl = item.data.url.replace(".jpg", "m.jpg")
                        catImages.push(item.data);
                    }
                    component.catImages = catImages;
                }
            };

            this.addPathChangeListener("selectedSub", this, "handleSelectedSubChange");
            this.templateObjects.subSelect.content = [
                {label: "Cats Standing Up", sub: "catsstandingup"},
                {label: "Kittens", sub: "kittens"}
            ];
        }
    },
    
    addSub: {
        value: function(sub) {
            var controller = this.templateObjects.subSelect.contentController;
            var item = {label: sub, sub: sub};
            
            controller.content.push(item);
            controller.selection = [item];
        }
    },
    
    handleSelectedSubChange: {
        value: function(selectedSub) {
            if (!selectedSub) {
                return;
            }
            
            var script = document.createElement("script");
            
            script.src = "http://www.reddit.com/r/" + selectedSub + ".json?limit=100&jsonp=catfn";
            document.head.appendChild(script);
        }
    },
    
    handleAddSubButtonAction: {
        value: function() {
            this.addSub(this.templateObjects.subTextField.value);
        }
    },
    
    handleSubTextFieldAction: {
        value: function() {
            this.addSub(this.templateObjects.subTextField.value);
        }
    }
});
