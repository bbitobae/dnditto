import {IStatProps, Stat} from "./Stat";
import { faForward } from '@fortawesome/free-solid-svg-icons';

export default function Initiative(props: IStatProps) {
    const statName = "Initiative";
    const icon = "fa-person-running-fast";
    const statType = "inv"
    const faIcon = faForward

    return(<Stat {...{stat: props.stat,
                     statName: statName,
                     icon: icon,
                     statType: statType,
                     faIcon: faIcon
                 }
    }/>)
}
