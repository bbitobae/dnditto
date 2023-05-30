import React, { Component } from 'react';
import { MDBTooltip } from 'mdb-react-ui-kit';
import "./Stat.scss"
import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

export interface IStatProps {
    stat: number;
    statName?: string;
    statType?: string;
    icon?: string;
    faIcon?: IconProp
}


export function Stat(props: IStatProps) {
    return(
        <div className={`stat ${props.statType}`}>
            <FontAwesomeIcon icon={props.faIcon ?? faCircleQuestion} />
            {props.stat}
        </div>
    )
}




