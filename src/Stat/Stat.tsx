import React, { Component } from 'react';
import { MDBTooltip } from 'mdb-react-ui-kit';
import "./Stat.scss"

export interface IStatProps {
    stat: number;
    statName?: string;
    statType?: string;
    icon?: string;
}


export function Stat(props: IStatProps) {
    return(
        <div className={`stat ${props.statType}`}>
            <i className={`fa-solid ${props.icon}`} />
            {props.stat}
        </div>
    )
}




