import React from 'react';
import { Container } from 'reactstrap';
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import InvoiceAction from "./InvoiceAction";
import FeedbackAction from "./FeedbackAction";
import RatingTemplate from "./RatingTemplate";

const index = () => {
    document.title = "Invoice Action | S.H.E Blockchain – Empowering Women in Blockchain";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Ecommerce Action" pageTitle="Email" />
                    <InvoiceAction />
                    <FeedbackAction />
                    <RatingTemplate />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default index;