import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import {  Row, Col } from 'react-bootstrap';
const TermsAndConditions = () => {
  return (
    <>
       <Meta title={"Terms And Conditions"}/>
          <BreadCrumb title="Terms And Conditions" />
          <Container class1="policy-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="policy">
                  <Row className="mt-4">
        <Col>
          <h2>Terms and Conditions</h2>
          <p>
            Welcome to [Your Company Name]. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Intellectual Property:</h4>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of [Your Company Name] and is protected by copyright laws. You may not use, reproduce, or distribute our content without our express written permission.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>User Accounts:</h4>
          <p>
            To access certain features of our website, you may need to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Prohibited Activities:</h4>
          <p>
            You agree not to engage in any prohibited activities, including but not limited to the unauthorized use of our website, violation of intellectual property rights, and any conduct that may disrupt or interfere with our services.
          </p>
        </Col>
      </Row>

      {/* ... Other sections of the terms and conditions ... */}

      <Row className="mt-4">
        <Col>
          <h4>Contact Us:</h4>
          <p>
            If you have any questions or concerns about our Terms and Conditions, please contact our legal team at <a href="mailto:legal@email.com">legal@email.com</a>.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <p>Thank you for reviewing and agreeing to our Terms and Conditions. We reserve the right to update or modify these terms at any time without prior notice.</p>
        </Col>
      </Row>
                  </div>
                </div>
              </div>
            </div>
          </Container>
    </>
     )  
}

export default TermsAndConditions