import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Services = () => {
  return (
    <React.Fragment>
      <section className="section" id="services">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h1 className="mb-3 ff-secondary fw-semibold lh-base">
                  A system of training, consulting and providing personnel for
                  businesses, including Startups
                </h1>
                <p className="text-muted">
                  To achieve this, it is necessary to apply the idea to digital
                  technology that combines web3 and financial tools.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-3">
            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-pencil-ruler-2-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Web3 platform</h5>
                  <p className="text-muted my-3 ff-secondary">
                    Smart contracts and blockchain, Web3 is expected to affect
                    many areas of life thanks to the core operating mechanisms
                    from decentralized platforms (dApps) as well as
                    decentralized autonomous organizations ( KNIFE).
                  </p>
                  <div>
                    <Link to="#" className="fs-13 fw-medium">
                      Learn More{" "}
                      <i className="ri-arrow-right-s-line align-bottom"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-palette-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Social networking platform</h5>
                  <p className="text-muted my-3 ff-secondary">
                    An online platform that everyone can use to exchange finance
                    and blockchain.
                  </p>
                  <div>
                    <Link to="#" className="fs-13 fw-medium">
                      Learn More{" "}
                      <i className="ri-arrow-right-s-line align-bottom"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-lightbulb-flash-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18"> Build a personal profile</h5>
                  <p className="text-muted my-3 ff-secondary">
                    Start building a personal brand for your startup or
                    business.
                  </p>
                  <div>
                    <Link to="#" className="fs-13 fw-medium">
                      Learn More{" "}
                      <i className="ri-arrow-right-s-line align-bottom"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-customer-service-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Strategic solution</h5>
                  <p className="text-muted my-3 ff-secondary">
                    S.H.E provides strategic solutions for blockchain business
                    including market research and project services.
                  </p>
                  <div>
                    <Link to="#" className="fs-13 fw-medium">
                      Learn More{" "}
                      <i className="ri-arrow-right-s-line align-bottom"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-stack-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Marketing, event organization</h5>
                  <p className="text-muted my-3 ff-secondary">
                    S.H.E provides a wide range of MKT forms in the platform and
                    ensures that the services work efficiently.
                  </p>
                  <div>
                    <Link to="#" className="fs-13 fw-medium">
                      Learn More{" "}
                      <i className="ri-arrow-right-s-line align-bottom"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-settings-2-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Training solution</h5>
                  <p className="text-muted my-3 ff-secondary">
                    The platform provides training solutions through:
                    E-learning, Webinar, offline courses organized by S.H.E or
                    associated with other partners.
                  </p>
                  <div>
                    <Link to="#" className="fs-13 fw-medium">
                      Learn More{" "}
                      <i className="ri-arrow-right-s-line align-bottom"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-slideshow-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Certifications and certificates</h5>
                  <p className="text-muted my-3 ff-secondary">
                    Provide certification of certificates, diplomas related to
                    courses offered by SHE
                  </p>
                  <div>
                    <Link to="#" className="fs-13 fw-medium">
                      Learn More{" "}
                      <i className="ri-arrow-right-s-line align-bottom"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-google-fill fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Consulting service, connection</h5>
                  <p className="text-muted my-3 ff-secondary">
                    Steps to become a complete Startup in Blockchain industry
                    and other personnel and services.
                  </p>
                  <div>
                    <Link to="#" className="fs-13 fw-medium">
                      Learn More{" "}
                      <i className="ri-arrow-right-s-line align-bottom"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-success rounded-circle">
                      <i className="ri-briefcase-5-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Recruit</h5>
                  <p className="text-muted my-3 ff-secondary">
                    Individuals, Projects, Startups, Enterprises wishing to
                    recruit, advertise their business, connect partners, use
                    services provided by S.H.E.
                  </p>
                  <div>
                    <Link to="#" className="fs-13 fw-medium">
                      Learn More{" "}
                      <i className="ri-arrow-right-s-line align-bottom"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Services;
