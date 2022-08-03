import React, {createContext, useContext, useMemo, useState} from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Entity.scss';
import {EntityContext} from "../EntityGroup/EntityGroup";
import Initiative from "../Stat/Initiative";
import Health from "../Stat/Health";
import Armour from "../Stat/Armour";
import {ActivityContext} from "../Dnditto";

interface IEntityProps {
    id: string;
    name: string;
    initiative: number;
    health: number;
    ac: number;
    level?: number;
}

export default function Entity(props: IEntityProps) {

    const useSelectionContext = () => {
        const context = useContext(EntityContext)
        if (!context) {
            throw new Error(
                "Entity context error"
            );
        }
        return context
    }

    const useActionContext = () => {
        const context = useContext(ActivityContext)
        if (!context) {
            throw new Error(
                "Activity context error"
            );
        }
        return context
    }

    const { selectionToggle, selectedEntity } = useSelectionContext()
    const { currentAction, setActionCallback } = useActionContext()


    return(
        <div onClick= { () => selectionToggle(props.id) }>
            <MDBRow className={`entity d-flex justify-content-center ${selectedEntity === props.id ? currentAction : 'neutral'}`}>

            <MDBCol md="2" className="stat">
                    <Initiative {...{stat: props.initiative}} />
                </MDBCol>
                <MDBCol md="4" className="name">
                            <span>
                                {props.name} {props.level ? `[${props.level}]` : ''}
                            </span>
                </MDBCol>
                <MDBCol md="2" className="stat">
                    <Health {...{stat: props.health}} />
                </MDBCol>
                <MDBCol md="2" className="stat">
                    <Armour {...{stat: props.ac}} />
                </MDBCol>
            </MDBRow>
        </div>
    )
}
