import React from 'react';
import './app.scss';


export default function Details(props) {
  if(props.task.assignee === null) {
    props.task.assignee = "";
  }
  return (
    <section>
        <div key={props.task.id}>
          <span>Description: {props.task.description}</span>
          <p>Assignee: {props.task.assignee}</p>
          <img src= {props.task.imgUrl} alt={props.task.imgUrl} />
        </div>
    </section>
  )

}