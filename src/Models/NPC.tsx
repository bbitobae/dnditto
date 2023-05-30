import Character from './Character';
import Info, {ArmourClass, Health, Initiative} from "./Info";

export default class NPC extends Character {
    constructor(
        id: string,
        cid: String,
        info: Info,
        hp: Health,
        inv: Initiative,
        ac: ArmourClass,
        ) {
        super(id, cid, info, hp, inv, ac)
    }
}
