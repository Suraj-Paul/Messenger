import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(" ");

  useEffect(() => {
    // firebase stuff
    db.collection('Messages')
      .orderBy('timestamp', 'desc').onSnapshot(
        snapshot => {
          setMessages(
            snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })))
        });
  }, []);


  useEffect(() => {
    setUsername(prompt('Please enter Your name...'));
  }, []); //condition


  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("Messages").add({         //Pushing the messages into the firebase(RDBMS)
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };


  return (
    <div className="App">
      <img className="messenger_logo" src="https://www.logo.wine/a/logo/Facebook_Messenger/Facebook_Messenger-Logo.wine.svg" />
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className = "app_input"  placeholder="Type message here..." type="text" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className ="icon_buttton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ message, id }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
