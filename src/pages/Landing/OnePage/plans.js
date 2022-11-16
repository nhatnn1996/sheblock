import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Plans = () => {
  const [plan, setPlan] = useState(true);
  const toggle = () => setPlan(!plan);
  return (
    <React.Fragment>
      <section className="section bg-light" id="plans">
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">
                  Join the millions of S.H.E members using Premium to get
                  ahead.
                </h3>
                <p className="text-muted mb-4">
                  Millions of members use Premium
                  <br />
                  Start your free 1-month trial today. Cancel anytime. We'll
                  send you a reminder 7 days before your trial ends.
                </p>

                <div className="d-flex justify-content-center align-items-center">
                  <div>
                    <h5 className="fs-14 mb-0">Month</h5>
                  </div>
                  <div
                    className="form-check form-switch fs-20 ms-3 "
                    onClick={toggle}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="plan-switch"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="plan-switch"
                    ></label>
                  </div>
                  <div>
                    <h5 className="fs-14 mb-0">
                      Annual{" "}
                      <span className="badge badge-soft-success">Save 20%</span>
                    </h5>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="gy-4">
            <Col lg={4}>
              <Card className="plan-box mb-0">
                <CardBody className="p-4 m-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fw-semibold">Career</h5>
                      <p className="text-muted mb-0">Get hired and get ahead</p>
                    </div>
                    <div className="avatar-sm">
                      <div className="avatar-title bg-light rounded-circle text-primary">
                        <i className="ri-book-mark-line fs-20"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 text-center">
                    {plan ? (
                      <h1 className="month">
                        <sup>
                          <small>$</small>
                        </sup>
                        <span className="ff-secondary fw-bold">19</span>{" "}
                        <span className="fs-13 text-muted">/Month</span>
                      </h1>
                    ) : (
                      <h1 className="annual">
                        <sup>
                          <small>$</small>
                        </sup>
                        <span className="ff-secondary fw-bold">171</span>{" "}
                        <span className="fs-13 text-muted">/Year</span>
                      </h1>
                    )}
                  </div>

                  <div>
                    <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            Stand out and get in touch with hiring managers
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            See how you compare to other applicants
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            {" "}
                            Learn new skills to advance your career
                          </div>
                        </div>
                      </li>
                      {/* <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>5</b> FTP Login
                          </div>
                        </div>
                      </li> */}
                      {/* <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-danger me-1">
                            <i className="ri-close-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>24/7</b> Support
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-danger me-1">
                            <i className="ri-close-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> Storage
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-danger me-1">
                            <i className="ri-close-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Domain</div>
                        </div>
                      </li> */}
                    </ul>
                    <div className="mt-4">
                      <Link to="#" className="btn btn-soft-success w-100">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            {/* <!--end col--> */}
            <Col lg={4}>
              <Card className="plan-box mb-0 ribbon-box right">
                <CardBody className="p-4 m-2">
                  <div className="ribbon-two ribbon-two-danger">
                    <span>Popular</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fw-semibold">Business</h5>
                      <p className="text-muted mb-0">
                        Grow and nurture your network
                      </p>
                    </div>
                    <div className="avatar-sm">
                      <div className="avatar-title bg-light rounded-circle text-primary">
                        <i className="ri-medal-fill fs-20"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 text-center">
                    {plan ? (
                      <h1 className="month">
                        <sup>
                          <small>$</small>
                        </sup>
                        <span className="ff-secondary fw-bold">29</span>{" "}
                        <span className="fs-13 text-muted">/Month</span>
                      </h1>
                    ) : (
                      <h1 className="annual">
                        <sup>
                          <small>$</small>
                        </sup>
                        <span className="ff-secondary fw-bold">261</span>{" "}
                        <span className="fs-13 text-muted">/Year</span>
                      </h1>
                    )}
                  </div>

                  <div>
                    <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                      <li>
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <b>All Career features, plus:</b>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            Find and contact the right people
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            Promote and grow your business
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            {" "}
                            Learn new skills to enhance your professional brand
                          </div>
                        </div>
                      </li>
                      {/* <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>12</b> FTP Login
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>24/7</b> Support
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-danger me-1">
                            <i className="ri-close-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> Storage
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-danger me-1">
                            <i className="ri-close-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Domain</div>
                        </div>
                      </li> */}
                    </ul>
                    <div className="mt-4">
                      <Link to="#" className="btn btn-soft-success w-100">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="plan-box mb-0">
                <CardBody className="p-4 m-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                      <h5 className="mb-1 fw-semibold">Recruiter Lite</h5>
                      <p className="text-muted mb-0">Enterprise Businesses</p>
                    </div>
                    <div className="avatar-sm">
                      <div className="avatar-title bg-light rounded-circle text-primary">
                        <i className="ri-stack-fill fs-20"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 text-center">
                    {plan ? (
                      <h1 className="month">
                        <sup>
                          <small>$</small>
                        </sup>
                        <span className="ff-secondary fw-bold">39</span>{" "}
                        <span className="fs-13 text-muted">/Month</span>
                      </h1>
                    ) : (
                      <h1 className="annual">
                        <sup>
                          <small>$</small>
                        </sup>
                        <span className="ff-secondary fw-bold">351</span>{" "}
                        <span className="fs-13 text-muted">/Year</span>
                      </h1>
                    )}
                  </div>

                  <div>
                    <ul className="list-unstyled text-muted vstack gap-3 ff-secondary">
                      <li>
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <b>All Business features, plus:</b>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            Find great candidates, faster
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            Contact top talent directly
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            Build relationships with prospective hires
                          </div>
                        </div>
                      </li>
                      {/* <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> FTP Login
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>24/7</b> Support
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">
                            <b>Unlimited</b> Storage
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="flex-shrink-0 text-success me-1">
                            <i className="ri-checkbox-circle-fill fs-15 align-middle"></i>
                          </div>
                          <div className="flex-grow-1">Domain</div>
                        </div>
                      </li> */}
                    </ul>
                    <div className="mt-4">
                      <Link to="#" className="btn btn-soft-success w-100">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Plans;
