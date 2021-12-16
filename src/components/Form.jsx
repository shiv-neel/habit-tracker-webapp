import {React, useState} from 'react'
import {InputLabel, Button, TextField} from '@material-ui/core'
import axios from 'axios'
const Form = () => {

    const [input, setInput] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        
    }
    return (
        <div>
            <form style={{padding: '2rem'}} onSubmit={submitHandler}>
                <InputLabel >I am becoming a person who: </InputLabel>
                <TextField onChange={e => setInput(e.target.value)}/>
                <Button type='submit' variant='outlined'>Add</Button>
            </form>
        </div>
    )
}

export default Form
