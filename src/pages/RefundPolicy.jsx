import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { Row, Col } from 'react-bootstrap';

const RefundPolicy = () => {
  return (
     <> 
    <Meta title={"Refund Policy"}/>
        <BreadCrumb title="Refund Policy" />
        <Container class1="policy-wrapper py-5 home-wrapper-2">
              <div className="row">
                <div className="col-12">
                  <div className="policy">
                  <Row className="mt-4">
        <Col>
          <h2>Refund Policy</h2>
          <p>
            We want you to be satisfied with your purchase from [Your Company Name]. Please review our refund policy below to understand the terms and conditions associated with refunds.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Refund Eligibility:</h4>
          <p>
            To be eligible for a refund, the item must be unused and in the same condition that you received it. It must also be in the original packaging.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Refund Process:</h4>
          <p>
            Once we receive your returned item, we will inspect it and notify you of the status of your refund. If your return is approved, we will initiate a refund to your original payment method.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Refund Timeframe:</h4>
          <p>
            The time it takes for your refunded amount to be credited to your account may vary depending on your payment method and financial institution.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Non-Refundable Items:</h4>
          <p>
            Certain items are non-refundable, including gift cards and downloadable software products.
          </p>
        </Col>
      </Row>

      {/* ... Other sections of the policy ... */}

      <Row className="mt-4">
        <Col>
          <h4>Contact Us:</h4>
          <p>
            If you have any questions or concerns about our refund policy, please contact our customer service team at <a href="mailto:customer-service@email.com">customer-service@email.com</a>.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <p>Thank you for choosing [Your Company Name]. We appreciate your understanding and cooperation with our refund policy.</p>
        </Col>
      </Row>
                  </div>
                </div>
              </div>
          </Container>
    </>
    )
}

export default RefundPolicy