import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

// Import Images
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";
import avatar10 from "../../../assets/images/users/avatar-10.jpg";

const Team = () => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="team">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">
                  Meet <span className="text-danger">Our Founders</span>
                </h3>
                <p className="text-muted mb-4 ff-secondary">
                  To achieve this, it would be necessary to have uniform
                  grammar, pronunciation and more common words. If several
                  languages coalesce the grammar.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {/* <!-- end col --> */}
            <Col lg={6} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img
                      src={
                        "https://sheblockchain.io/wp-content/uploads/2022/06/ART2210-cropped.jpeg"
                      }
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <Link
                      to="/apps-mailbox"
                      className="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                    >
                      <div className="avatar-title bg-transparent">
                        <i className="ri-mail-fill align-bottom"></i>
                      </div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/pages-profile" className="text-body">
                      Pham Thuy LINH
                    </Link>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">
                    Founder & Chairwoman
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
            <Col lg={6} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img
                      src={
                        "https://sheblockchain.io/wp-content/uploads/2022/06/ART2210-cropped.jpg"
                      }
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <Link
                      to="/apps-mailbox"
                      className="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                    >
                      <div className="avatar-title bg-transparent">
                        <i className="ri-mail-fill align-bottom"></i>
                      </div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/pages-profile" className="text-body">
                      Huynh Vu Thuy TIEN
                    </Link>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">
                    Co-Founder & President
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>
          </Row>

          {/* <!-- end row --> */}
          {/* <!-- end row --> */}

          {/* <!-- end row --> */}
        </Container>
      </section>
      <section className="section bg-light" style={{ paddingTop: 0 }} id="team">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">
                  Our <span className="text-danger">Mentor</span>
                </h3>
                <p className="text-muted mb-4 ff-secondary">
                  To achieve this, it would be necessary to have uniform
                  grammar, pronunciation and more common words. If several
                  languages coalesce the grammar.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {/* <!-- end col --> */}
            <Col lg={4} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img
                      src={
                        "https://sheblockchain.io/wp-content/uploads/2022/06/victor-tran.jpeg"
                      }
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <Link
                      to="/apps-mailbox"
                      className="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                    >
                      <div className="avatar-title bg-transparent">
                        <i className="ri-mail-fill align-bottom"></i>
                      </div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/pages-profile" className="text-body">
                      Victor Tran
                    </Link>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">
                    CEO & Co-Founder, Kyber Network
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
            <Col lg={4} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img
                      src={
                        "https://sheblockchain.io/wp-content/uploads/2022/06/pham-hoang-thu-uyen.jpg"
                      }
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <Link
                      to="/apps-mailbox"
                      className="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                    >
                      <div className="avatar-title bg-transparent">
                        <i className="ri-mail-fill align-bottom"></i>
                      </div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/pages-profile" className="text-body">
                      Uyen Pham
                    </Link>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">
                    CEO & Co-Founder, MetaBlock X
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
            <Col lg={4} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <img
                      src={
                        "https://sheblockchain.io/wp-content/uploads/2022/06/cris-d-tran.jpeg"
                      }
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <Link
                      to="/apps-mailbox"
                      className="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                    >
                      <div className="avatar-title bg-transparent">
                        <i className="ri-mail-fill align-bottom"></i>
                      </div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/pages-profile" className="text-body">
                      Cris D. Tran
                    </Link>
                  </h5>
                  <p className="text-muted mb-0 ff-secondary">
                    Chief Strategy - Vietnam, Huobi Global
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
          </Row>

          {/* <!-- end row --> */}
          {/* <!-- end row --> */}
          {/* <!-- end row --> */}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Team;
