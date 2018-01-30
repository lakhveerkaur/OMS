import React from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import {Button, Comment, Form, Header, Segment,Grid,Icon,Search,Divider,Input,Label,Menu,Image,Select,Radio,TextArea,Dropdown,Table,Modal  } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
const square = { width: 185, height: 185 }
export default class InventoryView extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state={
      modalOpen: false,
      activeItem: 'create',
      activeItem2:'bread',
      reveal : [],
     }
     this.handleOpen = this.handleOpen.bind(this);
     this.handleClose = this.handleClose.bind(this);
     this.handleReveal = this.handleReveal.bind(this);
  }
  handleOpen(){
    this.setState({modalOpen: true});
  }
  handleClose() {
    this.setState({modalOpen: false});
  }
  handleReveal(){
    var temp = [];
    temp.push(
      <Zoom>
        <Segment circular inverted style={square}>
          <Header as='h2' inverted>
            ShortFall Quantity
          </Header>
          <Header as='h3' inverted>
            500
          </Header>
        </Segment>
    </Zoom>
    );
    this.setState({reveal:temp});
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
         <Icon name='cubes' color='red' circular />
         <Header.Content className='header'>
           Inventory View
         </Header.Content>
       </Header>
        <Segment color='red'>
          <Grid container centered>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Button.Group>
                  <Button>Processing Center ID</Button>
                    <Dropdown placeholder='XXXX' button options={options} />
                </Button.Group>
              </Grid.Column>
              <Grid.Column>
                <Button.Group>
                  <Button>Product Category ID</Button>
                    <Dropdown placeholder='XXXX' button options={options} />
                </Button.Group>
              </Grid.Column>
              <Grid.Column>
                <Button.Group>
                  <Button>Projection Date</Button>
                    <Dropdown placeholder='XXXX' button options={options} />
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Button size='large' positive onClick={this.handleReveal}><Icon name='check'/>Check ShortFall Quantity</Button>
            </Grid.Row>
          </Grid>
        </Segment>
        <br/>
        <Grid centered>
          <Grid.Row columns={5}>
            <Grid.Column>
              {this.state.reveal}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
    );
  }
}
