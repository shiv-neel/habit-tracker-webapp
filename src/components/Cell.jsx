import {React, useState, useEffect} from 'react'
import { TableCell, Chip } from '@material-ui/core'
import './HabitRow.css'
import axios from 'axios'

const Cell = (props) => {
    const day = props.day
    const [state, setState] = useState(-1)
    const [text, setText] = useState('Incomplete')
    const [color, setColor] = useState('default')
    useEffect(() => {
        switch (props.habits.find(habit => habit.id === props.id)[day]) {
            case 'Complete':
                setText('Complete')
                setColor('primary')
                break
            case 'Incomplete':
                setText('Incomplete')
                setColor('default')
                break
            case 'Missed':
                setText('Missed')
                setColor('secondary')
                break
        }
    }, [])
    

    const updateBackend = (id, day, newState) => {
        var habitToUpdate = props.habits.find(habit => habit.id === id)
        habitToUpdate[day] = newState
        console.log(habitToUpdate)
        axios.put(`http://localhost:3001/habits/${id}`, habitToUpdate)
        .then(response => {
            console.log(response.data)
        axios.get('http://localhost:3001/habits')
        
            .then(response => {
                console.log(response.data)
                props.setHabits(response.data)
            })
        })
        
    }

    const updateChip = () => {
        switch (state) {
            case -1:
                setText('Complete')
                setColor('primary')
                setState(0)
                updateBackend(props.id, day, 'Complete')
                break
            case 0:
                setText('Missed')
                setColor('secondary')
                setState(1)
                updateBackend(props.id, day, 'Missed')
                break
            case 1:
                setText('Incomplete')
                setColor('default')
                setState(-1)
                updateBackend(props.id, day, 'Incomplete')
            default:
                console.log()
        }
    }

    return (
                <Chip className='tbc'
                    onClick={updateChip}
                    label={text}
                    color={color}
                    state={state}
                />
            
    )
}

export default Cell
