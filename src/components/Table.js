import React from 'react'

function Table(props){

    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                <th></th>
                <th>Employee Name <button className='filter' onClick={props.sortName}><i className="fas fa-filter"></i></button></th>
                <th>Phone Number <button className='filter' onClick={props.sortNumber}><i className="fas fa-filter"></i></button></th>
                <th>Email <button className='filter' onClick={props.sortEmail}><i className="fas fa-filter"></i></button></th>
                <th>Location <button className='filter' onClick={props.sortLocation}><i className="fas fa-filter"></i></button></th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user => 
                <tr key={user.index} style={{borderTop: "1px solid gray"}}>
                <td>
                    <img src={user.picture.thumbnail} alt="profile"/>
                </td>
                <td>{user.name.first} {user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.state}, {user.location.country}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table