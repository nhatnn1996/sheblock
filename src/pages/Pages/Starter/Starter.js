import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';

const Starter = () => {
document.title ="Starter | S.H.E Blockchain – Empowering Women in Blockchain";
  return (
    <React.Fragment>      
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Starter" pageTitle="Pages" />
          <Row>
            <Col xs={12}>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Starter;