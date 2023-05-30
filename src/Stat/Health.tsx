import {IStatProps, Stat} from './Stat';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Health(props: IStatProps) {
    const statName = "Health";
    const icon = "fa-heart";
    const statType = "hp"
    const faIcon = faHeart

    return(<Stat {...{stat: props.stat,
        statName: statName,
        icon: icon,
        statType: statType,
        faIcon: faIcon
    }}/>)
}
