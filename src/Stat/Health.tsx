import {IStatProps, Stat} from './Stat';

export default function Health(props: IStatProps) {
    const statName = "Health";
    const icon = "fa-heart";
    const statType = "hp"

    return(<Stat {...{stat: props.stat,
        statName: statName,
        icon: icon,
        statType: statType
    }}/>)
}
