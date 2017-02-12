define(["require", "exports", 'knockout'], function (require, exports, ko) {
    "use strict";
    // ViewModel for our Model
    var PersonViewModel = (function () {
        function PersonViewModel(person) {
            var _this = this;
            this.firstName = ko.observable(person.firstName);
            this.lastName = ko.observable(person.lastName);
            this.age = ko.observable(person.age);
            this.fullName = ko.computed({
                read: function () {
                    return _this.firstName() + " " + _this.lastName();
                },
                write: function (value) {
                    var lastSpacePos = value.lastIndexOf(" ");
                    if (lastSpacePos > 0) {
                        _this.firstName(value.substring(0, lastSpacePos));
                        _this.lastName(value.substring(lastSpacePos + 1));
                    }
                }
            });
            this.editing = ko.observable(false);
        }
        PersonViewModel.prototype.edit = function () {
            //to hold these data
            this.editing(true);
        };
        return PersonViewModel;
    }());
    return PersonViewModel;
});
//# sourceMappingURL=PersonViewModel.js.map