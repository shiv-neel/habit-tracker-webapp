import {React, useState, useEffect} from 'react'
import {
  Paper, 
  Table,  
  TableContainer,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core'
import HabitRow from '../HabitsApp/HabitRow'
import Form from '../HabitsApp/Form'
import axios from 'axios'

const HabitsApp = (props) => {
    const [habits, setHabits] = useState([{
        id: -1,
        title: "null",
        "mon": "Incomplete",
        "tue": "Incomplete",
        "wed": "Incomplete",
        "thu": "Incomplete",
        "fri": "Incomplete",
        "sat": "Incomplete",
        "sun": "Incomplete"
    
    }])
    
      useEffect(() => {
        axios.get('http://localhost:3001/habits')
        .then(response => {
          console.log(response.data)
          setHabits(response.data)
        })
        .catch(error => console.log(error))
      }, [])
     
      const d = new Date()
      const sunday_ms = d - (d.getDay() * 86400000)
    
      const sunday = new Date(sunday_ms)
      const monday = new Date(sunday_ms + 86400000)
      const tuesday = new Date(sunday_ms + 2 * 86400000)
      const wednesday = new Date(sunday_ms + 3 * 86400000)
      const thursday = new Date(sunday_ms + 4 * 86400000)
      const friday = new Date(sunday_ms + 5 * 86400000)
      const saturday = new Date(sunday_ms + 6 * 86400000)
    
      
    
      return (
        <div className="App">
          <h1>Habit Tracker</h1>
          <h2>Week of {sunday.toLocaleDateString()}</h2>
          <Form habits={habits} setHabits={setHabits}/>
          <TableContainer component={Paper}>
            <Table className='table' sx={{minWidth: 650}}>
              
                <TableRow>
                  <TableCell style={{minWidth: 100, textAlign: 'center'}}></TableCell>
                  <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Sun</p><p>{sunday.toLocaleDateString().slice(0, 5)}</p></TableCell>
                  <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Mon</p><p>{monday.toLocaleDateString().slice(0, 5)}</p></TableCell>
                  <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Tue</p><p>{tuesday.toLocaleDateString().slice(0, 5)}</p></TableCell>
                  <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Wed</p><p>{wednesday.toLocaleDateString().slice(0, 5)}</p></TableCell>
                  <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Thu</p><p>{thursday.toLocaleDateString().slice(0, 5)}</p></TableCell>
                  <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Fri</p><p>{friday.toLocaleDateString().slice(0, 5)}</p></TableCell>
                  <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Sat</p><p>{saturday.toLocaleDateString().slice(0, 5)}</p></TableCell>
                  
                </TableRow>
              
              <br></br>
              <TableBody>
                <HabitRow habits={habits} setHabits={setHabits}/>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
}

export default HabitsApp
