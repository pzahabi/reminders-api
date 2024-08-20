export default class Reminder {
    id: number;
    isCompelete: boolean;

    constructor(public title: string) {
        this.id = Date.now();
        this.isCompelete = false;
    };
}