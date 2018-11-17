export class User{
    constructor(
        public name: string,
        public phone: number,
        public email: string,
        public topic: string,
        public time: string,
        public subscribe: boolean
    ){}
}