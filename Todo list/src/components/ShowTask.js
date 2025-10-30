
const ShowTask = ({tasklist, setTasklist , task , setTask}) => {

  const handleEdit = (id) => {
    const selectedTask = tasklist.find(todo => todo.id === id);
    setTask(selectedTask);
  }

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter(todo => todo.id !== id);
    setTasklist(updatedTasklist);
  }

  return (
  <section className='showTask'>
   
    <ul>
    { tasklist.map((todo) => (
      <li key={todo.id}>
          <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.description}</span>
          </p>
          <i className="bi bi-pencil-square" onClick={() => handleEdit(todo.id)}></i>
          <i className="bi bi-trash" onClick={() => handleDelete(todo.id)}></i>
      </li>
  )) }     
    </ul>
  </section>
  )
}

export default ShowTask;