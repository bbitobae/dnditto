import {IStatProps, Stat} from "./Stat";

export default function Initiative(props: IStatProps) {
    const statName = "Initiative";
    const icon = "fa-shield";
    const statType = "inv"

    return(<Stat {...{stat: props.stat,
                     statName: statName,
                     icon: icon,
                     statType: statType
                 }
    }/>)
}
