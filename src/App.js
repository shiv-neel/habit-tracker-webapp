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
      icon: 'đ',
      component: <MorningRoutineApp/>
    },
    {
      id: 2,
      page: 'Habit Tracker',
      icon: 'đ¨',
      component: <HabitsApp/>
    },
    {
      id: 3,
      page: 'Reading List',
      icon: 'đ',
      component: <ReadingListApp/>
    },
    {
      id: 4,
      page: 'Task Manager',
      icon: 'â',
      component: <TaskManagerApp/>
    },
    {
      id: 5,
      page: 'Exercise Planner',
      icon: 'đ',
      component: <ExercisePlannerApp/>
    }
  ]

  const extras = [
    {
      id: 1,
      page: 'About',
      icon: 'âšī¸',
      component: null
    },
    {
      id: 2,
      page: 'Settings',
      icon: 'âī¸',
      component: null
    },
    {
      id: 3,
      page: 'Log out',
      icon: 'đĒ',
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
