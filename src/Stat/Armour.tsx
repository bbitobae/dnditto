import {IStatProps, Stat} from './Stat';
import { faShield } from '@fortawesome/free-solid-svg-icons';


export default function Armour(props: IStatProps) {
    const statName = "armour class";
    const icon = "fa-shield";
    const statType = "ac"
    const faIcon = faShield

    return(<Stat {...{stat: props.stat,
        statName: statName,
        icon: icon,
        statType: statType,
        faIcon: faIcon
    }}/>)
}
