import Entity from "../Entity/Entity";
import React, {createContext, useCallback, useEffect, useMemo, useState} from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Character from '../Models/Character';
import EntityGroupHeader from "../EntityGroupHeader/EntityGroupHeader";
import './EntityGroup.scss';

// interface IEntityGroupProps {
//     entities: Array<Character>
// }

export const EntityContext = createContext({
    selectionToggle: (id: string) => {},
    selectedEntity: ""
});

class EntityCharacter {
    constructor(
        public id: string,
        public name: string,
        public initiative: number,
        public health: number,
        public ac: number
    ) {}
}


// @ts-ignore
export const EntityGroup = ({ payload }) =>  {

    const transformCharacter = (c: Character) => {
        return new EntityCharacter(c.id, c.info.name, c.inv.base, c.hp.current, c.ac.base)
    }

    const [entities, setEntities] = useState(Array<EntityCharacter>())

    useEffect(() => {
        if (payload) {
            setEntities(payload.map((p: Character) => transformCharacter(p)))
        }
    }, [payload])


    const [selectedEntity, setSelectedEntity] = useState("")
    const [currentAction, setCurrentAction] = useState("selected")

    const selectionToggle = useCallback(
        (entityId: string) => {
            if (entityId !== selectedEntity) {
                setSelectedEntity(entityId)
                return
            }
            setSelectedEntity("")
            return
        }, [selectedEntity, setSelectedEntity]
    )
    const entityContext = useMemo(
        () => ({
            selectionToggle,
            selectedEntity
        }),
        [selectionToggle, selectedEntity, currentAction]
    )

    return (
        <div className="d-flex justify-content-center entity-group-root">
            <MDBContainer className="entity-group">
                <div className="entity-group-container">
                    <EntityGroupHeader />
                    <div className="entity-group-list">
                        <EntityContext.Provider value={entityContext}>
                            {entities.map(e => {
                                return <Entity {...e}></Entity>
                            })}
                        </EntityContext.Provider>
                    </div>
                </div>
            </MDBContainer>
        </div>
    )
}
