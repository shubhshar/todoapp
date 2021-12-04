import React from 'react'
import { List, ListItem, ListItemText  } from '@material-ui/core';

function Todo(props) {
 
  return (
    <List className="todo_list">
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>

          </Avatar>
        </ListItemAvatar> */}
        <ListItemText primary={props.text} secondary='dont forget'/>
      </ListItem>
    </List>
   )
}

export default Todo

