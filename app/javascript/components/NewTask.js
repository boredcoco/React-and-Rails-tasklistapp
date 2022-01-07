import React from "react"
import PropTypes from "prop-types"
import axios from 'axios';

class NewTask extends React.Component {
  state = {
    name: '',
    category: '',
    due_day: '',
    due_month: '',
    due_year: '',
    comments: ''
  }

  handleChange_name = event => {
    this.setState({ name: event.target.value});
  }

  handleChange_category = event => {
    this.setState({category: event.target.value});
  }

  handleChange_due_day = event => {
    this.setState({due_day: event.target.value});
  }

  handleChange_due_month = event => {
    this.setState({due_month: event.target.value});
  }

  handleChange_due_year = event => {
    this.setState({due_year: event.target.value});
  }

  handleChange_comments = event => {
    this.setState({comments: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

  const task = {
      name: this.state.name,
      category: this.state.category,
      due_day: this.state.due_day,
      due_month: this.state.due_month,
      due_year: this.state.due_year,
      comments: this.state.comments
      };

  axios.post(`/api/v1/tasks.json`, { task })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

  render () {
    return (
      <React.Fragment>
        <div class="card bg-info text-white">
          <br/>
          <form onSubmit={this.handleSubmit}>
            <div class="row">
                <div class="col" align="center">Add a task:</div>
                <div class="col"><input class="form-control" type="string" name="name" placeholder="name" onChange={this.handleChange_name} /></div>
                <div class="col"><input class="form-control" type="string" category="category" placeholder="category" onChange={this.handleChange_category} /></div>
                <div class="col"><input class="form-control" type="integer" due_day="due_day" placeholder="due day" onChange={this.handleChange_due_day} /></div>
                <div class="col"><input class="form-control" type="integer" due_month="due_month" placeholder="due month" onChange={this.handleChange_due_month} /></div>
                <div class="col"><input class="form-control" type="integer" due_year="due_year" placeholder="due year" onChange={this.handleChange_due_year} /></div>
                <div class="col"><input class="form-control" type="string" comments="comments" placeholder="comments" onChange={this.handleChange_comments} /></div>
              <div div class="col"><button class="btn btn-light text-info" type="submit" onClick={() => window.location.reload(false)}>Add</button></div>
              <div><br/></div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default NewTask
