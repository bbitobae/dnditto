import Character from './Character';

export default class Player extends Character {

    level: number | undefined;
    className: string | undefined; 
    race: string | undefined; 
    alignment: string | undefined;

    constructor(
        id: string,
        name: string,
        initiative: number,
        health: number,
        ac: number,
        level: number | undefined,
        className: string | undefined,
        race: string | undefined,
        alignment: string | undefined) {
            super(id, name, initiative, health, ac)
            this.level = level;
            this.className = className;
            this.race = race;
            this.alignment = alignment;
        }
}
