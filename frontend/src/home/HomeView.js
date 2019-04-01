import React, { PureComponent, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import Content from 'carbon-react/lib/components/content';
import Heading from 'carbon-react/lib/components/heading';

class HomeView extends PureComponent {
  render() {
    return (
      <Fragment>
        <Row>
          <Col mdOffset={1}>
          <Heading title="Home" />
            <Content
              title="Content Component"
            >
              An example of some content.
            </Content>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default HomeView;