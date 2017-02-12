import ko = require('knockout');
import Person = require('Scripts/App/Components/PersonTable/Models/Person');
import PageViewModel = require('Scripts/App/Components/PersonTable/ViewModels/PageViewModel');

require(["jQuery"], function ($) {
    $(document).ready(function () {
        ko.components.register('person-table', {
            viewModel: { require: 'Scripts/App/Components/PersonTable/ViewModels/PersonTableViewModel' },
            template: { require: 'text!Scripts/App/Components/PersonTable/Views/PersonTableView.html' }
        });

        var personArray: Person[] = [
            new Person('Steve', 'Maxwell', 36),
            new Person('John', 'Smith', 40)
        ];

        var pageViewModel: PageViewModel = new PageViewModel(personArray);
        ko.applyBindings(pageViewModel);
    });
});