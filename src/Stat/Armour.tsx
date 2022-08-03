import {IStatProps, Stat} from './Stat';

export default function Armour(props: IStatProps) {
    const statName = "armour class";
    const icon = "fa-shield";
    const statType = "ac"

    return(<Stat {...{stat: props.stat,
        statName: statName,
        icon: icon,
        statType: statType
    }}/>)
}
