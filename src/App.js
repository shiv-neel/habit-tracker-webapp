import './App.css'
import {React, useState, useEffect} from 'react'
import {
  Paper, 
  Table,  
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core'

import DateRow from './components/DateRow'
import HabitRow from './components/HabitRow'
import Form from './components/Form'
import axios from 'axios'

function App() {
  
  const [habits, setHabits] = useState([{
    "id": -1,
    "title": "null",
    "day": {
        "mon": "Incomplete",
        "tue": "Incomplete",
        "wed": "Incomplete",
        "thu": "Incomplete",
        "fri": "Incomplete",
        "sat": "Incomplete",
        "sun": "Incomplete"
    }
}])

  useEffect(() => {
    axios.get('http://localhost:3001/data')
    .then(response => setHabits(response.data))
    .catch(error => console.log(error))
  }, [])
 
  const [sundayDate, setSundayDate] = useState('')

  useEffect(() => {
    
    const d = new Date()
    const numDays = (month) => {
      if (month === 1) return 28
      else if (month === 0 || month === 2 || month === 4 || 
                month === 6 || month === 7 || month === 9 ||
                month === 11
                ) return 31
      else return 30
    }
    let day = (d.getDate() - d.getDay() + 1)
    let month = d.getMonth() + 1
    let year = d.getFullYear()
    setSundayDate(month + '/' + day + '/' + year)
  }, [])
  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <h2>Week of {sundayDate}</h2>
      <Form />
      <TableContainer component={Paper}>
        <Table className='table' sx={{minWidth: 650}}>
          
            <TableRow>
              <TableCell style={{minWidth: 100, textAlign: 'center'}}>Habit Name</TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Mon</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Tue</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Wed</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Thu</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Fri</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Sat</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Sun</p><p>12/14</p></TableCell>
            </TableRow>
          
          <br></br>
          <TableBody>
            <HabitRow habits={habits}/>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
