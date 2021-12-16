import React from 'react'
import {TableHead, TableRow, TableCell} from '@material-ui/core'
const DateRow = () => {
    return (
        <div>
              <TableCell style={{minWidth: 100, textAlign: 'center'}}>Habit Name</TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Mon</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Tue</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Wed</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Thu</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Fri</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Sat</p><p>12/14</p></TableCell>
              <TableCell style={{minWidth: 50, textAlign: 'center'}}><p>Sun</p><p>12/14</p></TableCell>
        </div>
    )
}

export default DateRow
