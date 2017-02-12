define(["require", "exports"], function (require, exports) {
    "use strict";
    var Person = (function () {
        function Person(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        return Person;
    }());
    return Person;
});
//# sourceMappingURL=Person.js.map