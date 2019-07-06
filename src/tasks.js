import React, {useState, useEffect} from 'react';
import './app.scss';

import mockData from './mock.json';

const API = 'http://taskmasterapp.us-east-2.elasticbeanstalk.com/tasks'

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const _getTasks = () => {
    
    // fetch from API
    fetch(proxyurl + API)
    .then( data => data.json() )
    .then( allTasks => setTasks(allTasks) )
    .catch( console.error );
  };
  // const _toggleStatus = (e) => {
  //   e.preventDefault();
  //   let id = e.target.id;
  //   // setPeople( people.map( (person) =>
  //   //   person.id !== id ? person : {...person, vip:!person.vip}
  //   // ));

  //   // patch to Brooks api
  //   fetch( `${API}/${id}/status`, {
  //     mode:'cors',
  //     method: 'PATCH'
  //   })
  //   .then(data => data.json())
  //   .then(person => {
  //     setPeople( people.map( (entry) => {
  //         return entry.id === id ? person : entry;
  //       }
  //     ));
  //   })
  //   .catch( console.error );

  // };

  useEffect(_getTasks, []);

  return (
    <ul>
      {tasks.map( (task) =>
        <li className={`status-${task.status}`} key={task.id}>
          <details>
            <summary>
              <span>{task.title}</span>
            </summary>
          
          </details>
        </li>
      )}
    </ul>
  )
}

export default Tasks;
