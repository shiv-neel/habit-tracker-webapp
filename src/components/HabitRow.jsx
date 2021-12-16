import React from 'react'
import Cell from './Cell'
import './HabitRow.css'

import {
    Paper, 
    Table,  
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody
  } from '@material-ui/core'

const HabitRow = (props) => {
    const habits = props.habits
    return (
            habits.map(habit => 
            <TableRow>
                <TableCell key={habit.id}>{habit.title}</TableCell>
                <TableCell><Cell key={habit.id+0.1}>{habit.day['sun']}</Cell></TableCell>
                <TableCell><Cell key={habit.id+0.2}>{habit.day['mon']}</Cell></TableCell>
                <TableCell><Cell key={habit.id+0.3}>{habit.day['tue']}</Cell></TableCell>
                <TableCell><Cell key={habit.id+0.4}>{habit.day['wed']}</Cell></TableCell>
                <TableCell><Cell key={habit.id+0.5}>{habit.day['thu']}</Cell></TableCell>
                <TableCell><Cell key={habit.id+0.6}>{habit.day['fri']}</Cell></TableCell>
                <TableCell><Cell key={habit.id+0.7}>{habit.day['sat']}</Cell></TableCell>
            </TableRow>)
    )
}

export default HabitRow
