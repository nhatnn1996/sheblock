import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

// Import Images
import img1 from "../../../assets/images/linh-and-tien.png";
import img2 from "../../../assets/images/landing/she-blockchain-mission.jpeg";
import img3 from "../../../assets/images/tien-linh-2.jpg";

const Features = () => {
  return (
    <React.Fragment>
      <section className="section bg-light py-5" id="features">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6} sm={7} className="mx-auto">
              <div style={{ textAlign: "center" }}>
                <img
                  src={img1}
                  alt=""
                  style={{ maxHeight: 550 }}
                  className="img-fluid mx-auto"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-muted">
                <div className="avatar-sm icon-effect mb-4">
                  <div className="avatar-title bg-transparent rounded-circle text-success h1">
                    <i className="ri-collage-line fs-36"></i>
                  </div>
                </div>
                <h3 className="mb-3 fs-20">About Us - Our Vision</h3>
                <p className="mb-4 ff-secondary fs-16">
                  By establishing a holistic educational organization led and
                  supported by top women in the blockchain industry, we build a
                  welcoming and empowering ecosystem that will become the
                  epicenter of not only ambitious but also productive female
                  workforce, fulfilling massive demands of the blockchain
                  industry.
                </p>

                <Row className="pt-3">
                  <Col className="col-3">
                    <div className="text-center">
                      <h4>+200</h4>
                      <p>Personnels</p>
                    </div>
                  </Col>
                  <Col className="col-3">
                    <div className="text-center">
                      <h4>150+</h4>
                      <p>Projects</p>
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="text-center">
                      <h4>3+</h4>
                      <p>Years</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-primary position-relative">
        <div className="bg-overlay bg-overlay-pattern opacity-50"></div>
        <Container>
          <Row className="align-items-center gy-4">
            <Col className="col-sm">
              <div>
                <h4 className="text-white mb-0 fw-semibold">
                  Build Startup/search for your project with S.H.E dashboard
                </h4>
              </div>
            </Col>
            <Col className="col-sm-auto">
              <div>
                <Link
                  to="/1.envato.market/velzon-admin"
                  target="_blank"
                  className="btn bg-gradient btn-danger"
                >
                  <i className="ri-login-circle-line align-middle me-1"></i>{" "}
                  Sign in
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={6} className="order-2 order-lg-1">
              <div className="text-muted">
                <h5 className="fs-12 text-uppercase text-success">Design</h5>
                <h4 className="mb-3">Our Ideal Candidate</h4>
                <p className="mb-4 ff-secondary">
                  Our Ideal candidate is any woman who is brave, bold and hungry
                  to explore new horizons. The Blockchain industry is a global
                  market that changes at lightning speed. No experience? No
                  problem. Bring an open mind, an eagerness to learn and a
                  passion for challenging yourself and we'll do the rest!
                  <br />
                  To find out more,
                </p>

                <Row>
                  <Col sm={6}>
                    <div className="vstack gap-2">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar-xs icon-effect">
                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                              <i className="ri-check-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-14 mb-0">Community Management</h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar-xs icon-effect">
                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                              <i className="ri-check-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-14 mb-0">Brand Ambassador</h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar-xs icon-effect">
                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                              <i className="ri-check-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-14 mb-0">Business developer</h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="vstack gap-2">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar-xs icon-effect">
                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                              <i className="ri-check-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-14 mb-0">Executive Assistant</h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar-xs icon-effect">
                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                              <i className="ri-check-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="fs-14 mb-0">Marketing director</h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar-xs icon-effect">
                            <div className="avatar-title bg-transparent text-success rounded-circle h2">
                              <i className="ri-check-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h5
                            className="fs-14 mb-0"
                            style={{ whiteSpacing: "nowrap" }}
                          >
                            KOL blockchain & cryptocurrency
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="mt-4">
                  <Link to="/index" className="btn btn-primary">
                    Learn More{" "}
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={6} sm={7} className="col-10 ms-auto order-1 order-lg-2">
              <div>
                <img src={img2} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>

          <Row className="align-items-center mt-5 pt-lg-5 gy-4">
            <Col lg={6} sm={7} className="col-10 mx-auto">
              {/* style={{ display: "flex", justifyContent: "center" }} */}
              <div>
                <img
                  src={img3}
                  alt=""
                  className="img-fluid"
                  style={{ maxHeight: 500 }}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-muted ps-lg-5">
                <h5 className="fs-12 text-uppercase text-success">structure</h5>
                <h4 className="mb-3">Holistic Education - Our Approach</h4>
                <p className="mb-4">
                  We approach the education of each student from 3 different
                  angles: mental, physical and emotional. Our goal is to ensure
                  the professional AND personal success of our students
                  regardless of their environment and challenges.
                </p>

                <div className="vstack gap-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar-xs icon-effect">
                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                          <i className="ri-check-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0">Mental Education</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar-xs icon-effect">
                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                          <i className="ri-check-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0">Physical Education</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar-xs icon-effect">
                        <div className="avatar-title bg-transparent text-success rounded-circle h2">
                          <i className="ri-check-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0">Emotional Education</p>
                    </div>
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

export default Features;
