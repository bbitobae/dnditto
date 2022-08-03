import React, {Component, createContext, useCallback, useMemo, useState} from 'react';
import EntityGroup from './EntityGroup/EntityGroup'
import data from './entities.json'
import Player from './Models/Player';
import NPC from './Models/NPC';
import Character from './Models/Character';
import './Dnditto.scss'
import Navbar from "./Navbar/Navbar";

export const ActivityContext = createContext({
    currentAction: "",
    setActionCallback: (attacking: boolean, healing: boolean) => {}
})

export default function Dnditto() {

    const [currentAction, setCurrentAction] = useState("selected")
    const setActionCallback = useCallback((attacking: boolean, healing: boolean): void => {
        if (attacking) {
            setCurrentAction("attack")
        } else if (healing) {
            setCurrentAction("heal")
        } else {
            setCurrentAction("selected")
        }
    }, [setCurrentAction])
    const activityContext = useMemo(
        () => ({
            currentAction: currentAction,
            setActionCallback: setActionCallback
        }), [ currentAction, setActionCallback ]
    )

    const loadData = (): Array<Character> => {
        return data.entities.map(entity => {
            if(entity.player) {
                return new Player(
                    entity.id,
                    entity.name,
                    entity.initiative,
                    entity.hp,
                    entity.ac,
                    entity.level,
                    entity.class,
                    entity.race,
                    entity.alignment)
            }
            else {
                return new NPC(entity.id, entity.name, entity.initiative, entity.hp, entity.ac)
            }
        })
    }

    return(
        <div className="dnditto">
            <ActivityContext.Provider value={activityContext}>
                <Navbar />
                <EntityGroup {...{entities: loadData()}} />
            </ActivityContext.Provider>

        </div>
    )
}
