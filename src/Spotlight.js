import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
// import SelectedListItem from './SelectedListItem'
import NestedList from './NestedList'

const useStyles = makeStyles(theme => {
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
  return (
    <Paper className={classes.paper} elevation={4}>
      <NestedList/>
    </Paper>
  )
}
