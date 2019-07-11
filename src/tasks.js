import React, {useState, useEffect} from 'react';
import './app.scss';
import Details from './details.js';


const API = 'http://taskmasterapp.us-east-2.elasticbeanstalk.com/tasks'


function Tasks() {

  const [tasks, setTasks] = useState([]);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const _getTasks = () => {
    
    // fetch from API
    fetch(proxyurl + API)
    .then( data => data.json() )
    .then( taskList => setTasks(taskList) )
    .catch( console.error );
  };

  const _toggleStatus = (e) => {
    e.preventDefault();
    let id = e.target.id;

    // patch to my api
    fetch( proxyurl + `${API}/${id}/state`, {
      method: 'PUT'
    })
    .then(data => data.json())
    .then(task => {
      setTasks( tasks.map( (entry) => {
          return entry.id === id ? task : entry;
        }
      ));
    })
    .catch( console.error );
  };

  useEffect(_getTasks, []);

  return (
    <ul>
      {tasks.map( (task) =>
        <li className={`status-${task.status}`}key={task.id}>
          <details>
            <summary>
         
            <img src= {task.imgResized} />
              <span>{task.title}</span>
              <button className="status" id={task.id} onClick={_toggleStatus} >{task.status}</button>
              <form action={`${API}/${task.id}/images`} method="POST" encType="multipart/form-data">
                <label>
                  <span>Upload Image: </span>
                  <input name="file" type="file" />
                </label>
                <button>Save</button>
              </form>

            </summary>
            <Details task={task} />
          </details>
        </li>
      )}
    </ul>
  )
}

export default Tasks;
