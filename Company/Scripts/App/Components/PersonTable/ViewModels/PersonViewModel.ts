﻿import Person = require('../Models/Person');
import ko = require('knockout');

// ViewModel for our Model
class PersonViewModel implements PersonVM.IPersonViewModel {
    public firstName: KnockoutObservable<string>;
    public lastName: KnockoutObservable<string>;
    public age: KnockoutObservable<number>;
    public fullName: KnockoutComputed<string>;
    public editing: KnockoutObservable<boolean>;

    constructor(person: PersonM.IPerson) {
        this.firstName = ko.observable(person.firstName);
        this.lastName = ko.observable(person.lastName);
        this.age = ko.observable(person.age);
        this.fullName = ko.computed({
            read: () => {
                return this.firstName() + " " + this.lastName();
            },
            write: (value: string) => {
                var lastSpacePos = value.lastIndexOf(" ");
                if (lastSpacePos > 0) {
                    this.firstName(value.substring(0, lastSpacePos));
                    this.lastName(value.substring(lastSpacePos + 1));
                }
            }
        });
        this.editing = ko.observable(false);
    }

    edit() {
        //to hold these data
        this.editing(true);
    }
}
export = PersonViewModel;