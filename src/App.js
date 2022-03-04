
import React, {useState} from 'react'

const App = () => {
  const data = [
    {
      name:"Newton School"
    },
    {
      name:"Node"
    },
    {
      name:"React"
    }
  ]
  const [search, setSearch] = useState('');
  return (
    <React.Fragment>
      <h3>Search</h3>
      <input type="text" id="search-input" onChange={(e) => {setSearch(e.target.value)}} />
      <h3>Result</h3>
      {
        data && data.filter((val) =>{
          if(search == "") {
            return val;
          }else if(val.name.toLowerCase().includes(search.toLowerCase())){
            return val;
          }
        }).map((item,id) => {
          return (
            <div>
              <li>{item.name}</li>
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default App
