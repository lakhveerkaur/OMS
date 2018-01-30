import React from 'react';
import {Button, Comment, Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label,Menu,Image,Select,Radio,TextArea,Dropdown,Table,Modal  } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
const optionsDC = [
  { key: 'b', text: 'Banaglore', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
export default class AllocationPage extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state={
      modalOpen: false,
      activeItem: 'create',
      activeItem2:'bread',
      allocatedDC : 'Chennai',
      optionsDC : [
        { key: 'b', text: 'Banaglore', value: 'Banaglore' },
        { key: 'm', text: 'Mumbai', value: 'Mumbai' },
      ]
     }
     this.handleOpen = this.handleOpen.bind(this);
     this.handleClose = this.handleClose.bind(this);
     this.handleChange = this.handleChange.bind(this);

  }
  handleOpen(){
    this.setState({modalOpen: true});

  }
  handleClose() {
    this.setState({modalOpen: false});
  }
  handleChange(e,{value}){
    this.setState({allocatedDC:value});
  }
  render()
  {
    const {optionsDC} = this.state;
    const {value} = this.state
    return(
      <div>
        <Image src='./images/top.png'/>
      <br/>
      <Header as='h2' icon textAlign='center'>
         <Icon name='truck' color='red' circular />
         <Header.Content className='header'>
           Allocation Details
         </Header.Content>
       </Header>
        <Segment>
        <Table inverted >
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell width={4} className='tableHeader'>Product Order Id</Table.HeaderCell>
            <Table.HeaderCell width={4} className='tableHeader'>P.O Creation Date</Table.HeaderCell>
            <Table.HeaderCell width={4} className='tableHeader'>P.O. Pickup Date</Table.HeaderCell>
          <Table.HeaderCell width={4} className='tableHeader'>Allocated DC</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell className='table1' ></Table.Cell>
            <Table.Cell className='table1' ></Table.Cell>
            <Table.Cell className='table1' ></Table.Cell>
          <Table.Cell className='table1' ><Dropdown inline placeholder={this.state.allocatedDC} options={optionsDC} value={value} onChange={this.handleChange}/></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </Segment>
    </div>
    );
  }
}
