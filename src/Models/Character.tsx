
export default abstract class Character {

    constructor(
        public id: string,
        public name: string,
        public initiative: number,
        public health: number,
        public ac: number) {}
}
