define(["require", "exports", 'knockout'], function (require, exports, ko) {
    "use strict";
    var PageViewModel = (function () {
        function PageViewModel(personData) {
            this.persons = ko.observableArray(personData);
        }
        return PageViewModel;
    }());
    return PageViewModel;
});
//# sourceMappingURL=PageViewModel.js.map