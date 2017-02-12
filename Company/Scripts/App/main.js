define(["require", "exports", 'knockout', 'Scripts/App/Components/PersonTable/Models/Person', 'Scripts/App/Components/PersonTable/ViewModels/PageViewModel'], function (require, exports, ko, Person, PageViewModel) {
    "use strict";
    require(["jQuery"], function ($) {
        $(document).ready(function () {
            ko.components.register('person-table', {
                viewModel: { require: 'Scripts/App/Components/PersonTable/ViewModels/PersonTableViewModel' },
                template: { require: 'text!Scripts/App/Components/PersonTable/Views/PersonTableView.html' }
            });
            var personArray = [
                new Person('Steve', 'Maxwell', 36),
                new Person('John', 'Smith', 40)
            ];
            var pageViewModel = new PageViewModel(personArray);
            ko.applyBindings(pageViewModel);
        });
    });
});
//# sourceMappingURL=main.js.map