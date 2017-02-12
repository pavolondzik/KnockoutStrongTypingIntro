define(["require", "exports", './PersonViewModel', 'knockout'], function (require, exports, PersonViewModel, ko) {
    "use strict";
    // ViewModel for component
    var PersonTableViewModel = (function () {
        function PersonTableViewModel(params) {
            var _this = this;
            var persons = params.value();
            this.persons = ko.observableArray([]);
            if (persons && persons.length > 0) {
                persons.forEach(function (value) {
                    _this.persons.push(new PersonViewModel(value));
                });
            }
        }
        return PersonTableViewModel;
    }());
    return PersonTableViewModel;
});
//# sourceMappingURL=PersonTableViewModel.js.map