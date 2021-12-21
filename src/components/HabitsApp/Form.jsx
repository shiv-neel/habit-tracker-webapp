import {React, useState} from 'react'
import {InputLabel, Button, TextField} from '@material-ui/core'
import axios from 'axios'

const Form = (props) => {

    const [input, setInput] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        const newHabit = {
            id: Date.now(),
            title: input,
            "mon": "Incomplete",
            "tue": "Incomplete",
            "wed": "Incomplete",
            "thu": "Incomplete",
            "fri": "Incomplete",
            "sat": "Incomplete",
            "sun": "Incomplete"
            
        } 
        axios.post('http://localhost:3001/habits', newHabit)
        .then(response => console.log(newHabit))
        setInput('')
        props.setHabits(props.habits.concat(newHabit))

    }
    return (
        <div>
            <form style={{padding: '2rem'}} onSubmit={submitHandler}>
                <InputLabel >Add a new habit: </InputLabel>
                <TextField onChange={e => setInput(e.target.value)}/>
                <Button type='submit' variant='outlined'>Add</Button>
            </form>
        </div>
    )
}

export default Form
