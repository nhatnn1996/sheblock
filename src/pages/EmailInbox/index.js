import React from 'react';
import { Container } from 'reactstrap';
// import EmailSidebar from './EmailSidebar';
import EmailToolbar from './EmailToolbar';

const MailInbox = () => {
    document.title="Mailbox | S.H.E Blockchain – Empowering Women in Blockchain";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                
                    <div className="email-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
                        {/* <EmailSidebar /> */}
                        <EmailToolbar />
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default MailInbox;