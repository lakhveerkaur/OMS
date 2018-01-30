import React from 'react';
import {Button, Comment, Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label,Menu,Image,Select,Radio,TextArea,Dropdown,Table,Modal  } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
export default class ProductOrderViewPage extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state={
      modalOpen: false,
      activeItem: 'create',
      activeItem2:'bread'
     }
     this.handleOpen = this.handleOpen.bind(this);
     this.handleClose = this.handleClose.bind(this);
  }
  handleOpen(){
    this.setState({modalOpen: true});
  }
  handleClose() {
    this.setState({modalOpen: false});
  }
  render()
  {
    // const {activeItem} = this.state
    //   const {activeItem2} = this.state
    return(
      <div>
        <Image src='./images/top.png'/>
      <br/>
      <Header as='h2' icon textAlign='center'>
         <Icon name='shopping cart' color='red' circular />
         <Header.Content className='header'>
           Purchased Order View
         </Header.Content>
       </Header>
        <Segment>
        <Table inverted >
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell className='tableHeader'>Product Order Id</Table.HeaderCell>
            <Table.HeaderCell className='tableHeader'>P.O Creation Date</Table.HeaderCell>
            <Table.HeaderCell className='tableHeader'>P.O. Pickup Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell className='table1' >
              <Modal trigger={<Button onClick={this.handleOpen}>Show Modal</Button>} open={this.state.modalOpen} onClose={this.handleClose} style={{height:'300px'}}>
              {/* <Header icon='browser' content='Product Order Id' /> */}
                <Modal.Content>
                  <Grid centered>
                      <Grid.Column>
                        <Header as='h2' block inverted className='tableHeader' >
                          <Icon name='browser'></Icon>
                          Product Order Id
                        </Header>
                        <Table striped>
                          <Table.Header>
                            <Table.Row>
                              <Table.HeaderCell>Product Id</Table.HeaderCell>
                              <Table.HeaderCell>Product Quantity</Table.HeaderCell>
                            <Table.HeaderCell >Delete Product</Table.HeaderCell>
                            </Table.Row>
                          </Table.Header>
                          <Table.Body>
                            {this.state.productTable}
                          </Table.Body>
                        </Table>
                        <center>
                        <Button animated='fade' onClick={()=>this.props.handleProductCheckout(this.props.cartItem)}>
                          <Button.Content visible>
                            Save
                          </Button.Content>
                          <Button.Content hidden>
                            <Icon name='check' />
                          </Button.Content>
                        </Button>
                      </center>
                      </Grid.Column>
                    </Grid>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='green' onClick={this.handleClose} inverted>
                    <Icon name='checkmark' /> Got it
                  </Button>
                </Modal.Actions>
              </Modal>
            </Table.Cell>
            <Table.Cell className='table1' >200</Table.Cell>
            <Table.Cell className='table1' >0g</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </Segment>
    </div>
    );
  }
}
