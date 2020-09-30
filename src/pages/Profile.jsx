import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../src/loading1.gif";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function Profile() {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  // if (isLoading) {
  //   return <div> <img width="500" height="500" src={logo} alt=" Loading ..." /></div>;
  // }
  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </Col>
      </Row>
      {/* <Row>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row> */}
      <button onClick={() => console.log(user)}>print data</button>

    </Container>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div> <img width="500" height="500" src={logo} alt=" Loading ..." /></div>,
});