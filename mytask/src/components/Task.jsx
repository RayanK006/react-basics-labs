import React from 'react';

const Task = (props) => {
    
        return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority">{props.priority}</p>
        </div>
    )
    
    
  {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
      priority={task.priority}
    />
  ))}


}

export default Task;