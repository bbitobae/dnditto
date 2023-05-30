import Character from './Character';
import Info, {ArmourClass, Health, Initiative, PlayerInfo} from "./Info";

export default class Player extends Character {

    constructor(
        id: string,
        cid: String,
        info: PlayerInfo,
        hp: Health,
        inv: Initiative,
        ac: ArmourClass,
    ) {
        super(id, cid, info, hp, inv, ac)
    }
}
