import './App.css'
import {React, useState} from 'react'
import HabitsApp from './components/Applications/HabitsApp'
import MorningRoutineApp from './components/Applications/MorningRoutineApp'
import ReadingListApp from './components/Applications/ReadingListApp'
import TaskManagerApp from './components/Applications/TaskManagerApp'
import ExercisePlannerApp from './components/Applications/ExercisePlannerApp'
import { Button, Drawer, Box, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

const App = () => {
  
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [renderedScreen, setRenderedScreen] = useState(<HabitsApp/>)
  const services = [
    {
      id: 1,
      page: 'Morning Routine',
      icon: '🌅',
      component: <MorningRoutineApp/>
    },
    {
      id: 2,
      page: 'Habit Tracker',
      icon: '🔨',
      component: <HabitsApp/>
    },
    {
      id: 3,
      page: 'Reading List',
      icon: '📚',
      component: <ReadingListApp/>
    },
    {
      id: 4,
      page: 'Task Manager',
      icon: '✅',
      component: <TaskManagerApp/>
    },
    {
      id: 5,
      page: 'Exercise Planner',
      icon: '🏋',
      component: <ExercisePlannerApp/>
    }
  ]

  const extras = [
    {
      id: 1,
      page: 'About',
      icon: 'ℹ️',
      component: null
    },
    {
      id: 2,
      page: 'Settings',
      icon: '⚙️',
      component: null
    },
    {
      id: 3,
      page: 'Log out',
      icon: '🚪',
      component: null
    }
  ]

  const toggleMenu = (isOpen, e) => {
    setMenuOpen(!isMenuOpen)
  }

  const list = (
    <Box
    sx={{width: 250}}
    onClick={toggleMenu}
    >
      <List>
        <ListItem>Menu</ListItem>
        {services.map(service => (
          <ListItem button key={service.id} onClick={() => setRenderedScreen(service.component)}>
            <ListItemIcon>
              {service.icon}
            </ListItemIcon>
            <ListItemText primary={service.page}/>
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {extras.map(service => (
          
          <ListItem button key={service.id} onClick={() => setRenderedScreen(service.component)}>
            <ListItemIcon>
              {service.icon}
            </ListItemIcon>
            <ListItemText primary={service.page}/>
          </ListItem>
        ))}
      </List>
    </Box>
  )

    
  return (
    <div>
    <Button onClick={toggleMenu}>MENU</Button>
    <Drawer
      open={isMenuOpen}
      onClose={toggleMenu}
    >
      {list}
    </Drawer>
    {renderedScreen}
    </div>
  )
}

export default App;
