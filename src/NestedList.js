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

const K = v => fn => { fn(v); return v }

export default function NestedList() {
  const classes = useStyles()
  const uri = group => group.uri
  const unset = (acc, uri) => K(acc)(acc => acc[uri] = false)
  const initialExpandedState = layers.map(uri).reduce(unset, {})

  const [expanded, setExpanded] = React.useState(initialExpandedState)
  const onExpanded = uri => value => {
    const { ...state } = initialExpandedState
    state[uri] = value
    setExpanded(state)
  }

  const groups = layers.map(group => <LayerGroup
    key={group.uri}
    expanded={expanded[group.uri]}
    onExpanded={onExpanded(group.uri)}
    group={group}
  />)

  return <List className={classes.list}>{ groups }</List>
}
