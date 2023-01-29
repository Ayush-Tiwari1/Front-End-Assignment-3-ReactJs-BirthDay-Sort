import { useEffect,useState } from 'react';
import Table from './Table';
import '../App.css';
function Data() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData=()=>
    fetch('https://dummyjson.com/users')
    .then(response=>response.json())
    .then(json=>{
      setData(json.users);

    })
    .catch(e=>{
      console.log('erros',e)
    })
    fetchData();
  },[])
  const Name = [...data].sort((a, b) =>
    a.firstName > b.firstName ? 1 : -1,
  );
  // console.log(Name);
  const Age = [...data].sort((a, b) => b.age - a.age);
  // console.log(Age);

  const Tablerows=data.map(
    (element)=>{
        return(
            <tr>
                <td>{element.firstName}</td>
                <td>{element.age}</td>
            </tr>
        )
    }
  )
  const setName=()=>{

  setData(Name);
  }
  const setAge=()=>{
    setData(Age);
  }
  return (
    <div className="Data">
      <button onClick={()=>setName()}>Name</button>
      <button onClick={()=>setAge()}>Age</button>

      <Table Tablerow={Tablerows}/>
    </div>
  );
}
export default Data;
