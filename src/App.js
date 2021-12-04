import React, { useState , useEffect } from "react";
import Todo from './Todo';
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { db } from './firebaseconf';
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([
    // "take the dogs out",
    // "take the trash out",
    // "im best",
  ]);
  const [input, setInput] = useState(" ");
  //console.log(input);

  // const [countr , setCountr]= useState(0);

  // const countInc = (event)=>{
  //   setCountr(countr+1);
  // }

  //when the app loads we need to listen to the databse and fetch new todos as they get added 
// useEffect runs  once when the app loads()
 useEffect(()=>{
  db.collection('taskone').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
    console.log(snapshot.docs.map(doc=>doc.data()));//gives array of objects
    setTodos(snapshot.docs.map(doc=>doc.data().todo))
  })
 },[]);

  const addTodo = (event) => {
      // console.log("im clicked");
    setTodos([...todos, input]);
    event.preventDefault();

    db.collection('taskone').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  };

  return (
    <div className="App">
      <h1>Whats on the list buddy 🧐 </h1>
      <form>
        <FormControl>
          <InputLabel>Add here</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          //onClick={scountInc}
          variant="contained"
          color="primary"
        >
          Add items
        </Button>
        </form>
        {/* <button onClick={addTodo}>Add items</button> */}
        <ul>
          {todos.map((todo) => (
            // <li>{todo}</li>
            <Todo text={todo}/>
          ))}
        </ul>
      
    </div>
  );
}

export default App;
