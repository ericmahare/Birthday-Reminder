import { useState } from 'react';
import Person from './components/Person';
import data from './data';
const App = () => {
  const [person, setPersons] = useState(data);
  return (
    <div className="container">
      <h2 className='title'>{person.length > 0 ? `${person.length} Birthdays Today`: 'No birthdays available !!!'} </h2>
      {person.map((data) =><Person key={data.id} data = {data}/>)}
      {person.length > 0 && <button className='btn' onClick={() => setPersons([])}>clear All</button>}
    </div>
  )
}
export default App