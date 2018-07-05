import React, { Component } from "react";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import "./App.css";
import axios from 'axios'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          url: '',
          shorturl: '',
          message: '',
        };
    }

   
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        let that = this;
        axios.post('http://localhost:7000/api/item', {
            "originalUrl": this.state.url,
	        "shortBaseUrl": "localhost:3000/shorturl"
          })
          .then(function (response) {
            console.log(response);
            that.setState({
                message: (<Message positive >
                Your short link was successfully created at <a href={response.data.shortUrl} target="_blank">{response.data.shortUrl}</a>
              </Message>)
            })
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%', padding: '5%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Shorten Your URL
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment>
            <Form.Input fluid icon='linkify' iconPosition='left' placeholder='https://google.com' name='url' value={this.state.url} onChange={this.handleChange} />
            <Button color='teal' fluid size='large'>
              Get Short URL
            </Button>
          </Segment>
        </Form>
        {this.state.message}
      </Grid.Column>
    </Grid>
  </div>
        )
    }
}

export default Main;