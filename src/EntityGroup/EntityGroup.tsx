import Entity from "../Entity/Entity";
import React, { createContext, useCallback, useMemo, useState} from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Character from '../Models/Character';
import EntityGroupHeader from "../EntityGroupHeader/EntityGroupHeader";
import './EntityGroup.scss';

interface IEntityGroupProps {
    entities: Array<Character>
}

export const EntityContext = createContext({
    selectionToggle: (id: string) => {},
    selectedEntity: ""
});

export default function EntityGroup(props: IEntityGroupProps) {

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

    const renderEntity = (c: Character) => {
        const entityProps = {
            id: c.id,
            name: c.name,
            initiative: c.initiative,
            health: c.health,
            ac: c.ac
        }
        return (
            <Entity {...entityProps} />
        )
    }

    const [entities, setEntities] = useState(props.entities.map((c: Character) => renderEntity(c)))

    return(
        <div className="d-flex justify-content-center entity-group-root">
            <MDBContainer className="entity-group">
                <div className="entity-group-container">
                    <EntityGroupHeader />
                    <div className="entity-group-list">
                        <EntityContext.Provider value={entityContext}>
                            {entities}
                        </EntityContext.Provider>
                    </div>
                </div>
            </MDBContainer>
        </div>
    )
}
