import Character from './Character';

export default class NPC extends Character {
    constructor(
        id: string,
        name: string,
        initiative: number,
        health: number,
        ac: number) {
            super(id, name, initiative, health, ac)
        }
}
