export default abstract class Info {
    protected constructor(public name: string) {}
}

export abstract class PlayerInfo extends Info {
    protected constructor(public name: string,
                          public className: string,
                          public race: string,
                          public alignment: string,
                          public level: number) {
        super(name)
    }
}

export class Health {
    constructor(public current: number, public total: number) {}
}

export class ArmourClass {
    constructor(public base: number) {}
}

export class Initiative {
    constructor(public base: number) {}
}
