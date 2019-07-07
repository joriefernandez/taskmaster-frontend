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
          <span>Assignee: {props.task.assignee}</span>
        </div>
    </section>
  )

}