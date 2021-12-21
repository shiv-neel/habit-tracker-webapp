import React from 'react'
import Cell from './Cell'
import './HabitRow.css'

import {
    TableRow,
    TableCell
  } from '@material-ui/core'

const HabitRow = (props) => {
    const habits = props.habits
    return (
            habits.map(habit =>
            <TableRow>
                <TableCell key={habit.id}>{habit.title}</TableCell>
                <TableCell><Cell habits={habits} setHabits={props.setHabits} id={habit.id} day='mon'></Cell></TableCell>
                <TableCell><Cell habits={habits} setHabits={props.setHabits} id={habit.id} day='tue'>{habit['tue']}</Cell></TableCell>
                <TableCell><Cell habits={habits} setHabits={props.setHabits} id={habit.id} day='wed'>{habit['wed']}</Cell></TableCell>
                <TableCell><Cell habits={habits} setHabits={props.setHabits} id={habit.id} day='thu'>{habit['thu']}</Cell></TableCell>
                <TableCell><Cell habits={habits} setHabits={props.setHabits} id={habit.id} day='fri'>{habit['fri']}</Cell></TableCell>
                <TableCell><Cell habits={habits} setHabits={props.setHabits} id={habit.id} day='sat'>{habit['sat']}</Cell></TableCell>
                <TableCell><Cell habits={habits} setHabits={props.setHabits} id={habit.id} day='sun'>{habit['sun']}</Cell></TableCell>
            </TableRow>)
    )
}

export default HabitRow
