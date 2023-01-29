import React from 'react'
import '../Components/Comp.css'
function Table(props){
    return(
        <div className='main-cont'>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {props.Tablerow}
            </tbody>
        </table>
        </div>
    )
}
export default Table;