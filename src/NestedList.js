import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import LayerGroup from './LayerGroup'
import layers from './layers.json'

const useStyles = makeStyles(theme => ({
  list: {
    maxHeight: '0px', // can be any value?
    fontSize: '90%'
  }
}))


export default function NestedList() {
  const classes = useStyles()
  const groups = layers.map(group => <LayerGroup
    key={group.uri}
    group={group}
  />)

  return (
    <List className={classes.list}>
      { groups }
    </List>
  )
}
