import React, { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import Content from 'carbon-react/lib/components/content';
import Heading from 'carbon-react/lib/components/heading';
import Button from 'carbon-react/lib/components/button';
import MultiActionButton from 'carbon-react/lib/components/multi-action-button';
import {TableRow, TableHeader, TableCell, Table} from 'carbon-react/lib/components/table';

const tableData = [
  { id: 1, name: "teste", value: "teste" },
  { id: 2, name: "teste", value: "teste" },
  { id: 3, name: "teste", value: "teste" },
  { id: 4, name: "teste", value: "teste" },
  { id: 5, name: "teste", value: "teste" },
  { id: 6, name: "teste", value: "teste" },
  { id: 7, name: "teste", value: "teste" },
]

const buildRows = () => {
  // create rows array with header row:
  let rows = [
  ];

  // iterate over data to add additional rows:
  tableData.forEach((tableData) => {
    rows.push(
      <TableRow key={ tableData.id } uniqueID={ `${tableData.id}` }>
        <TableCell>{ tableData.name }</TableCell>
        <TableCell>{ tableData.value }</TableCell>
      </TableRow>
    );
  });

  return rows;
}

export default class TravelView extends PureComponent{
  state = {
    selected: true
  }

  render(){
    return (
      <>
        <Row>
          <Col mdOffset={1}>
          <Heading title="Travel" />
            <Content
              title="Content Component"
            >
              An example of some content.
            </Content>

            <Table
              onClick={() =>console.log('teasd')}
              actionToolbarChildren={ (context) => {
                  return [
                    <Button disabled={ context.disabled } key='single-action'>
                      Test Action
                    </Button>,
                    <MultiActionButton text='Actions' disabled={ context.disabled } key='multi-actions'>
                      <Button>foo</Button>
                      <Button>bar</Button>
                      <Button>qux</Button>
                    </MultiActionButton>
                  ];
                } }
              path="/countries"
              caption="Country and Country Codes"
              currentPage="1"
              shrink={ true }
              highlightable={ false }
              pageSize="10"
              selectable={ true }
              paginate={ true }
              actions={ { delete: { icon: 'bin' }, settings: { icon: 'settings' }} }
              totalRecords="191"
              showPageSizeSelection={ true }
            >
            <TableRow key="header" uniqueID='header'>
              <TableHeader sortable={ true } name='name' scope='col'>
                Country
              </TableHeader>
        
              <TableHeader scope='col'>Code</TableHeader>
            </TableRow>
            { buildRows() }
            </Table>
          </Col>
        </Row>
      </>
    );
  }
}