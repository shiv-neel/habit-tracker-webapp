import {React, useState} from 'react'
import { TableCell, Chip } from '@material-ui/core'
import './HabitRow.css'

const Cell = (props) => {

    const [state, setState] = useState(-1)
    const [text, setText] = useState('Incomplete')
    const [color, setColor] = useState('default')

    const updateChip = () => {
        switch (state) {
            case -1:
                setText('Complete')
                setColor('primary')
                setState(0)
                break
            case 0:
                setText('Missed')
                setColor('secondary')
                setState(1)
                break
            case 1:
                setText('Incomplete')
                setColor('default')
                setState(-1)
        }
    }
    return (
                <Chip style={{fontFamily: 'Nunito'}}
                    onClick={updateChip}
                    label={text}
                    color={color}
                    state={state}
                />
            
    )
}

export default Cell
