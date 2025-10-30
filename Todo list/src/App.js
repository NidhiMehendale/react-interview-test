import React, { useState  , useEffect} from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';


function App() {
  const [tasklist , setTasklist] = useState( JSON.parse(localStorage.getItem('tasklist')) ||[]);
  const [task , seTask ] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  },[tasklist])

  return (
    <div className="App">
      <Header/>
      <AddTask tasklist={tasklist} setTasklist={setTasklist}  task={task} setTask={seTask}/>
      <ShowTask tasklist={tasklist} setTasklist={setTasklist}  task={task} setTask={seTask}/>
    </div>
  );
}

export default App;
