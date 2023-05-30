import React, {Component, createContext, useCallback, useEffect, useMemo, useState} from 'react';
import Character from './Models/Character';
import './Dnditto.scss'
import Navbar from "./Navbar/Navbar";
import mqtt, { IClientOptions } from "mqtt/dist/mqtt";
import {EntityGroup} from "./EntityGroup/EntityGroup";
import { BrowserRouter, Route } from 'react-router-dom';

export const ActivityContext = createContext({
    currentAction: "",
    setActionCallback: (attacking: boolean, healing: boolean) => {}
})


class MqttClientOptions implements IClientOptions {
    constructor(
        public host: string,
        public port: number,
        public protocol: "mqtt" | "ws",
        public keepalive: number,
        public clientId: string
    ) {
    }
}

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





    let mqttOptions: MqttClientOptions = {
        port: 1883,
        host: "localhost",
        keepalive: 20,
        protocol: "mqtt",
        clientId: "mqttjs_frontend",
    };


    function setConnectStatus(status: string) {
        console.info(status)
    }

    const [client, setClient] = useState(mqtt.connect("ws://localhost:1884"));

    const [entitiesState, setEntitiesState] = useState(new Map<string, Character>())
    const [entitiesList, setEntitiesList] = useState(Array<Character>())

    const [payload, setPayload] = useState({})

    useEffect(() => {
        if (client) {
            client.subscribe("/#");
            client.on('connect', () => {
                setConnectStatus('Connected');
                client.subscribe("dnditto/+/combatants/#", { qos: 1 },(error) => {
                    if (error) {
                        console.log('Subscribe to topics error', error)
                        return
                    }
                })
            })
            client.on('error', (err) => {
                console.error('Connection error: ', err);
                client.end();
            });
            client.on('reconnect', () => {
                setConnectStatus('Reconnecting');
            });
            client.on('message', (topic, message) => {
                let combatant: Character = JSON.parse(message.toString())
                setEntitiesState(e => {
                    let entMap = e
                    entMap.set(combatant.id, combatant)
                    return entMap
                })

                setEntitiesList(l => {
                    let list = [...l]
                    list.push(combatant)
                    return list
                })
            });
        }
    }, [client, entitiesState]);

    return(
        <div className="dnditto">
            <ActivityContext.Provider value={activityContext}>
                <Navbar />
                <EntityGroup payload={entitiesList} />
            </ActivityContext.Provider>

        </div>
    )
}
