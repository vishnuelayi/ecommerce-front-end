import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import {  Row, Col } from 'react-bootstrap';
const ShippingPolicy = () => {
  return (
  <>
     <Meta title={"Shippping Policy"}/>
        <BreadCrumb title="Shippping Policy" />
        <Container class1="policy-wrapper py-5 home-wrapper-2">
              <div className="row">
                <div className="col-12">
                  <div className="policy">
                  <Row className="mt-4">
        <Col>
          <h2>Shipping Policy</h2>
          <p>
            Thank you for choosing Creative Clothing for your T-shirt shopping needs.
            <br/> Please review our shipping policy below to understand how we process and deliver your orders.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Order Processing:</h4>
          <ul>
            <li>Orders are typically processed within 1-2 business days after payment confirmation.</li>
            <li>Orders placed on weekends or holidays will be processed on the next business day.</li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Shipping Methods:</h4>
          <ul>
            <li>We offer standard shipping for all orders.</li>
            <li>Standard shipping usually takes 3-7 business days for delivery, depending on your location.</li>
            <li>Expedited shipping options are available at an additional cost for faster delivery.</li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4>Shipping Costs:</h4>
          <ul>
            <li>Shipping costs are calculated at checkout based on your location and the weight of the items in your order.</li>
            <li>We may offer free shipping promotions from time to time, which will be clearly stated during the checkout process.</li>
          </ul>
        </Col>
      </Row>

      {/* ... Other sections of the policy ... */}

      <Row className="mt-4">
        <Col>
          <h4>Returns Due to Shipping Issues:</h4>
          <ul>
            <li>If your order is returned to us due to an incorrect address provided by the customer, we will contact you for a corrected address and additional shipping fees if applicable.</li>
          </ul>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <p>If you have any questions or concerns about our shipping policy, please feel free to contact our customer service team at <a href="mailto:customer-service@email.com">creative-service@email.com</a>.</p>
          <p>Thank you for choosing Creative Clothing for your T-shirt shopping experience!</p>
        </Col>
      </Row>
                  </div>
                </div>
              </div>
          </Container>
  </>
   )  
}

export default ShippingPolicy