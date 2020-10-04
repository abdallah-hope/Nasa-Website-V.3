var ourInput = document.getElementById("search");

ourInput.onfocus = function () {
    
    "use strict";
    
    if (this.placeholder === "Type to search") {
        
        this.placeholder = "";
    }
};
ourInput.onblur = function () {
    
    "use strict";
    
    if (this.placeholder === "") {
        
        this.placeholder = "Type to search";
    }
};