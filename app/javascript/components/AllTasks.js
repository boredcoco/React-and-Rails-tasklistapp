import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class AllTasks extends React.Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    axios.get(`/api/v1/tasks.json`)
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      })
  }

  render () {
    return (
      <React.Fragment>
        <ul>
          {
            this.state.tasks.map((task) => {
                 return (
                   <div>
                   <br/>
                     <div class="card bg-info text-white" align="center" style={{ width: '18rem' }} key={task.id}>
                        <div>
                          <br/>
                            <h5 class="card-title" align="center">{task.id} | {task.name}</h5>
                            <h6 class="card-subtitle mb-2 text-white" align="center">Category: {task.category}</h6>
                            <p class="card-text" align="center">Due on: {task.due_day} / {task.due_month} / {task.due_year}</p>
                            <p class="card-text" align="center">Comments: {task.comments}</p>
                            <br/>
                        </div>
                      </div>
                      <br/>
                    </div>
                 )
             })
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default AllTasks
