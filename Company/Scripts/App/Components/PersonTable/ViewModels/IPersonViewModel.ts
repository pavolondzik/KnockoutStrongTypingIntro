module PersonVM {
    export interface IPersonViewModel {
        firstName: KnockoutObservable<string>;
        lastName: KnockoutObservable<string>;
        age: KnockoutObservable<number>;
        fullName: KnockoutObservable<string>;
        editing: KnockoutObservable<boolean>;
    }
}