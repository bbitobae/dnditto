import Info, {ArmourClass, Health, Initiative} from "./Info";

export default abstract class Character {

    protected constructor(
        public id: string,
        public cid: String,
        public info: Info,
        public hp: Health,
        public inv: Initiative,
        public ac: ArmourClass,
    ) {}
}

