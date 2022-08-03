import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import "./EntityGroupHeader.scss"

export default function EntityGroupHeader() {
    return(
        <MDBRow className="head-group d-flex justify-content-center">
            <MDBCol md="2" className="head">
                Initiative
            </MDBCol>
            <MDBCol md="4" className="head">
                Name
            </MDBCol>
            <MDBCol md="2" className="head">
                Health
            </MDBCol>
            <MDBCol md="2" className="head">
                AC
            </MDBCol>
        </MDBRow>
    )
}
