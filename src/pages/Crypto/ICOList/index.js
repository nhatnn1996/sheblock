import React from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Widgets from './Widgets';
import ICO from './ICO';

const ICOList = () => {
    document.title="ICO LIST | S.H.E Blockchain – Empowering Women in Blockchain";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="ICO LIST" pageTitle="Crypto" />
                    <Row>
                        <Widgets />
                    </Row>
                    <ICO />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ICOList;