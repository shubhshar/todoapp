import React from 'react'
import { Button, List, ListItem, ListItemText  } from '@material-ui/core';
import {db}  from './firebaseconf'

function Todo(props) {
 
  return (
    <List className="todo_list">
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>

          </Avatar>
        </ListItemAvatar> */}
        <ListItemText primary={props.todo.todo} secondary='dont forget'/>
      </ListItem>
      <Button onClick={event=>
      db.collection('taskone').doc(props.todo.id).delete()}>Delete</Button>
    </List>
   )
}

export default Todo

