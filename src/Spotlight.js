import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import SelectedListItem from './SelectedListItem'

const useStyles = makeStyles(theme => {
  console.log('theme', theme)

  return {
    paper: {
      pointerEvents: 'auto',
      gridArea: 'R',
      overflow: 'auto',

      // Layout:
      borderRadius: '6px' // default: 4px
    }
  }
})

export default () => {
  const classes = useStyles()
  console.log('classes', classes.paper)
  return (
    <Paper className={classes.paper} elevation={4}>
      <SelectedListItem/>
    </Paper>
  )
}
