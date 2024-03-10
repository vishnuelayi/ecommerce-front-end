import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import {  Row, Col } from 'react-bootstrap';
const PrivacyPolicy = () => {
  return (
    <> 
    <Meta title={"Privacy Policy"}/>
        <BreadCrumb title="Privacy Policy" />
        <Container class1="policy-wrapper py-5 home-wrapper-2">
              <div className="row">
                <div className="col-12">
                  <div className="policy">
                  <Row className="mt-4">
        <Col>
          <h2>Privacy Policy</h2>
          <p>
            Your privacy is important to us at [Your Company Name]. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website or services.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Information We Collect:</h4>
          <p>
            We may collect personal information, including but not limited to, your name, email address, and billing information when you make a purchase or sign up for our newsletter.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>How We Use Your Information:</h4>
          <p>
            We use the information we collect to process your orders, send newsletters or promotional materials, and improve our services. Your information is not shared with third parties unless required for the fulfillment of our services or as required by law.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Security:</h4>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </Col>
      </Row>

      {/* ... Other sections of the policy ... */}

      <Row className="mt-4">
        <Col>
          <h4>Contact Us:</h4>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact our privacy team at <a href="mailto:privacy@email.com">privacy@email.com</a>.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <p>Thank you for trusting [Your Company Name] with your personal information. We are committed to protecting your privacy and ensuring a secure online experience.</p>
        </Col>
      </Row>
                  </div>
                </div>
              </div>
          </Container>
        </>
  )
}

export default PrivacyPolicy