import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from './Table'

function MainContainer(){
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        generateRandomEmployees()
    }, [])

    async function generateRandomEmployees(){
        const result = await axios.get('https://randomuser.me/api/?nat=US&noinfo&results=25&seed=seed')
        setUsers(result.data.results)
    }

    function getEmployee(){
        console.log('User search:', search)
        const searchedUser = users.filter(user => search.indexOf(user.name.first)> -1 || search.indexOf(user.name.last)> -1)
        console.log(searchedUser)
        setUsers(searchedUser)
    }

    function clearSearch(){
        setSearch("")
        generateRandomEmployees()
    }

    function handleInputChange(event){
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        getEmployee()
    }

    function sortEmail(){
        console.log('*** sort by email')
        const sorted = users.sort( function(item1, item2){
            if(item1.email < item2.email){
                return -1
            }
            if (item1.email > item2.email){
                return 1
            }
            return 0
        })
        console.log('List: ', sorted)
        setUsers([...sorted])
    }


    function sortNumber(){
        console.log('**** sort by number')
        const sorted = users.sort( function(item1, item2){
            if(item1.phone < item2.phone){
                return -1
            }
            if (item1.phone > item2.phone){
                return 1
            }
            return 0
        })
        console.log('List: ', sorted)
        setUsers([...sorted])
    }

    function sortName(){
        console.log('*** sort by last name')
        const sorted = users.sort( function(item1, item2){
            if(item1.name.last < item2.name.last){
                return -1
            }
            if (item1.name.last > item2.name.last){
                return 1
            }
            return 0
        })
        console.log('List: ', sorted)
        setUsers([...sorted])
    }

    function sortLocation(){
        console.log('*** sort by location')
        const sorted = users.sort( function(item1, item2){
            if(item1.location.state < item2.location.state){
                return -1
            }
            if (item1.location.state > item2.location.state){
                return 1
            }
            return 0
        })
        console.log('List: ', sorted)
        setUsers([...sorted])
    }

    return(
        <div className="container" style={{marginTop: "50px", marginBottom: "50px"}}>
            {/**** Search ****/}
            <div className="input-group mb-3 float-center">
                <input value={search} onChange={handleInputChange} type="text" className="form-control" placeholder="Search Employee" aria-describedby="submitButton"/>
                <button className="btn btn-outline-secondary" onClick={clearSearch}> X </button>
                <button onClick={handleFormSubmit} className="btn btn-outline-primary" type="submit" id="submitButton">Search</button>
            </div>
            <div style={{display: "flex", justifyContent: "center",  margin: "auto", color: "gray"}}>
                <p><small>Hover over the column name to sort</small></p>
            </div>
            <Table list={users} sortName={sortName} sortEmail={sortEmail} sortNumber={sortNumber} sortLocation={sortLocation}/>
        </div>
    )
}

export default MainContainer