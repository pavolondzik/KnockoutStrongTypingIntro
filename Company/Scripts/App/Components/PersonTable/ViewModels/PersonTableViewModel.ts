import Person = require('../Models/Person');
import PersonViewModel = require('./PersonViewModel');
import ko = require('knockout');

// ViewModel for component
class PersonTableViewModel {
    public persons: KnockoutObservableArray<PersonViewModel>;

    constructor(params) {
        var persons = params.value();
        this.persons = ko.observableArray([]);
        if (persons && persons.length > 0) {
            persons.forEach((value: Person) => {
                this.persons.push(new PersonViewModel(value));
            });
        }
    }
}
export = PersonTableViewModel; 