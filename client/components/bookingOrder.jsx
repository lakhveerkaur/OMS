import React from 'react';
import {Button, Comment, Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label,Menu,Image,Select,Radio,TextArea,Dropdown,Table,Modal  } from 'semantic-ui-react';
import Request from 'superagent';

export default class BookingOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boDetails : [],
      modalOpen : false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    Request.get('/getBookingOrder')
          .end((err, res) => {
            if (err) {
              console.log('Error from fetching bookingOrder data - > ',err);
            } else {
              console.log('response from bookingOrder data - > ',JSON.parse(res.text));
              this.setState({boDetails:JSON.parse(res.text)});
              console.log('state - > ',this.state.boDetails);
            }
          });
  }

  handleOpen() {
    this.setState({modalOpen: true});
  }

  handleClose() {
    this.setState({modalOpen: false});
  }

  render() {
    var tableBody = this.state.boDetails.map((item, i) => {
      return(
        <Table.Row key={i}>
          <Table.Cell className='table'>
            {item.bo_id}
            <span> - </span>
            <Modal trigger={<Button onClick={this.handleOpen} icon><Icon name='external' /></Button>} open={this.state.modalOpen} onClose={this.handleClose} size='small'>
              <Modal.Content>
                <Table inverted>
                  <Table.Header >
                    <Table.Row>
                      <Table.HeaderCell className='tableHeader'>Sku Id</Table.HeaderCell>
                      <Table.HeaderCell className='tableHeader'>Units</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>

                  </Table.Body>
                </Table>
              </Modal.Content>
              <Modal.Actions>
               <Button color='red' onClick={this.handleClose} inverted>
                 <Icon name='close' /> Close
               </Button>
             </Modal.Actions>
            </Modal>
          </Table.Cell>
          <Table.Cell className='table'>{item.po_id}</Table.Cell>
          <Table.Cell className='table'>{item.carrier_id}</Table.Cell>
          <Table.Cell className='table'>{item.po_delivery_date}</Table.Cell>
          <Table.Cell className='table'>{item.destination}</Table.Cell>
          <Table.Cell className='table'>{item.type_of_delivery}</Table.Cell>
        </Table.Row>
      );
    });

    return(
      <div>
        <Image src='./images/top.png'/>
        <br/>
        <Header as='h2' icon textAlign='center'>
          <Icon name='shipping' color='red' circular />
          <Header.Content className='header'>
            Booking Orders
          </Header.Content>
        </Header>
        <Segment>
          <Table inverted >
            <Table.Header >
              <Table.Row>
                <Table.HeaderCell className='tableHeader'>Booking Order Id</Table.HeaderCell>
                <Table.HeaderCell className='tableHeader'>Purchase Order Id</Table.HeaderCell>
                <Table.HeaderCell className='tableHeader'>Carrier Id</Table.HeaderCell>
                <Table.HeaderCell className='tableHeader'>Delivery Date</Table.HeaderCell>
                <Table.HeaderCell className='tableHeader'>Destination</Table.HeaderCell>
                <Table.HeaderCell className='tableHeader'>Type of Delivery</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Cell>
                <Modal style={{height:'400px'}} trigger={<Button onClick={this.handleOpen} icon><Icon name='external' /></Button>} open={this.state.modalOpen} onClose={this.handleClose} size='huge'>

                  <Header as='h2' className='modalHeader'>
                    <Icon name='browser' />
                    <Header.Content >
                      Booking Orders
                    </Header.Content>
                  </Header>
                  <Modal.Content>
                    <Grid columns={2}>
                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'grey', pointing:'right',content: 'Booking Order ID' }}
                            labelPosition='left'
                            value='Enter tags' fluid
                            disabled
                          />
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'grey', pointing:'right', content: 'Booking Status' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                            disabled
                          />
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'grey', pointing:'right', content: 'Purchase Order ID' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                            disabled
                          />
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'grey', pointing:'right', content: 'Purchase Order Creation Date' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                            disabled
                          />
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'grey', pointing:'right', content: 'Purchase Order Status' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                            disabled
                          />
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'grey', pointing:'right', content: 'Pickup Date' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                            disabled
                          />
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Input
                            label={{  color:'green',pointing:'right', content: 'Delivery Date' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                          />
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'grey', pointing:'right', content: 'Vendor ID' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                            disabled
                          />
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Input
                            label={{  color:'green',pointing:'right', content: 'Carrier ID' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                          />
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'grey', pointing:'right', content: 'Origin' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                            disabled
                          />
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'green', pointing:'right', content: 'Destination' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                          />
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Input
                            label={{ color:'grey', pointing:'right', content: 'Type Of Delivery' }}
                            labelPosition='left'
                            placeholder='Enter tags' fluid
                            disabled
                          />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Modal.Content>
                  <Modal.Actions>
                   <Button color='red' onClick={this.handleClose} inverted>
                     <Icon name='close' /> Close
                   </Button>
                 </Modal.Actions>
                </Modal>
              </Table.Cell>
              {tableBody}
            </Table.Body>
          </Table>
        </Segment>
      </div>
    );
  }
}
