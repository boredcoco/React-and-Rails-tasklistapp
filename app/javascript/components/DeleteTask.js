import React from "react"
import PropTypes from "prop-types"
import axios from "axios"

class DeleteTask extends React.Component {

  state = {
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`/api/v1/tasks/${this.state.id}.json`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render () {
    return (
      <React.Fragment>
        <div><br/></div>
        <div class="card bg-info" style={{ width: '18rem' }}>
          <form onSubmit={this.handleSubmit} align="center">
            <label class="text-white">
              <br/>
              <h5>Delete a task?</h5>
              <div><br/></div>
              <input type="number" class="form-control" placeholder="Task ID" name="id" onChange={this.handleChange} />
            </label>
            <div><br/></div>
            <button class="btn btn-light text-info" type="submit" onClick={() => window.location.reload(false)}>Delete</button>
            <div><br/></div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default DeleteTask
