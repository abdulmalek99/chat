/* eslint-disable no-unused-vars */
import style from '../css/style.css';
/* eslint-enable no-unused-vars */
import password from './config';

console.log();
const knapp = document.getElementById('knapp');
const text = document.getElementById('text');
const input = document.getElementById('input');

const connection = new WebSocket('ws://104.248.143.87:1337');

connection.onmessage = message => {
  const data = JSON.parse(message.data)
  
  if (data.type == "message"){
    console.log(data)
    const time = data.data.time
    const author = data.data.author
    const text = data.data.text
    const color = data.data.color
  }
};

knapp.addEventListener('click', () => {
  text.textContent = input.value;
  
  const obj = {
    type: 'message',
    data: input.value,
    key: password
  };
  const jsonObj = JSON.stringify(obj);
  connection.send(jsonObj);
  input.value = '';
});
