import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import ConditionalRendering from './components/ConditionalRendering';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Hello />
      <Message messageContent="SOME CONTENT"/>
      <Profile name="Taher" >
        <h3>This is the slot let's say for now</h3>
      </Profile>
      <ConditionalRendering></ConditionalRendering>
      <Todo></Todo>
    </div>
  );
}

export default App;
