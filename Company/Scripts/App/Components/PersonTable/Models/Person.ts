class Person implements PersonM.IPerson {
    constructor(public firstName: string, public lastName: string, public age: number) {
    }
}
export = Person;