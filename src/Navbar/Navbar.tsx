import {MDBBtn, MDBContainer, MDBNavbar} from "mdb-react-ui-kit";
import {useContext, useEffect, useMemo, useState} from "react";
import {ActivityContext} from "../Dnditto";

export default function Navbar() {

    const [attacking, setAttacking] = useState(false)
    const [healing, setHealing] = useState(false)

    const useActionContext = () => {
        const context = useContext(ActivityContext)
        if (!context) {
            throw new Error(
                "Activity context error"
            );
        }
        return context
    }

    const { currentAction, setActionCallback } = useActionContext()

    useEffect(() => {
        setActionCallback(attacking, healing)
    }, [attacking, healing])

    const toggleAction = (
        one: boolean,
        setOne: (one: boolean) => void,
        other: boolean,
        setOther: (one: boolean) => void
    ) => {
        if (other) { setOther(!other) }
        setOne(!one)
    }

    return (
        <MDBNavbar>
            <MDBContainer tag="form" fluid className="justify-content-end">
                <div>
                    <MDBBtn outline={!attacking} color="danger" className="me-2" type="button" onClick={() => toggleAction(attacking, setAttacking, healing, setHealing)}>
                        Attack
                    </MDBBtn>
                    <MDBBtn outline={!healing} color="success" className="me-2" type="button" onClick={() => toggleAction(healing, setHealing, attacking, setAttacking)}>
                        Heal
                    </MDBBtn>
                </div>
                <div>
                    <MDBBtn outline color="info" className="me-2" type="button">
                        Next Round
                    </MDBBtn>
                </div>
            </MDBContainer>
        </MDBNavbar>
    )
}
