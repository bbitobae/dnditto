import Modal from 'react-modal';
import Character from "../Models/Character";
import { v4 as uuidv4 } from 'uuid';
import NPC from "../Models/NPC";
import Info, {Health} from "../Models/Info";
import {useState} from "react";

export interface INewEntityModalProps {
    isOpen: boolean;
}

export class NewNPC {
    constructor(public name?: String,
                public hpCurrent?: number,
                public hpTotal?: number,
                public acBase?: number,
                public invBase?: number) {
    }
}

export function NewEntityModal(props: INewEntityModalProps) {


    const [newNPC, setNewNPC] = useState(new NewNPC())

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function afterOpen() {
    }

    function close() {
    }

    function handleChange(event: Event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setNewNPC(npc => npc.[name] = value);
    }

    return(
        <div>
            <Modal
                isOpen={props.isOpen}
                onAfterOpen={afterOpen}
                onRequestClose={close}
                style={customStyles}
                contentLabel="Example Modal" >
                <form>
                    <label>name</label>
                    <input name="npcName" type="text" />
                    <label></label>

                </form>

            </Modal>
        </div>
    )
}
