import React from 'react';
import styled from 'styled-components';
import Spinner from 'carbon-react/lib/components/spinner';

const Loading = styled.div`
  margin-right: 30px;
`

export default () => (
  <Loading>
    <Spinner as="success" size="small"/>
  </Loading>
);
