import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { Map } from 'immutable'
import LayerGroup from './LayerGroup'
import layers from './layers.json'

const layerGroups = layers.filter(layer => !layer.title.includes('GW'))

const useStyles = makeStyles(theme => ({
  list: {
    maxHeight: '0px', // can be any value?
    fontSize: '90%'
  }
}))

export default function NestedList() {
  const classes = useStyles()
  const uri = group => group.uri
  const initialExpandedState = layerGroups.map(uri).reduce((acc, uri) => acc.set(uri, false), Map({}))
  const [expanded, setExpanded] = React.useState(initialExpandedState)
  const onExpanded = uri => value => setExpanded(initialExpandedState.set(uri, value))

  const groups = layerGroups.map(group => <LayerGroup
    key={group.uri}
    expanded={expanded.get(group.uri)}
    onExpanded={onExpanded(group.uri)}
    group={group}
  />)

  return <List className={classes.list}>{ groups }</List>
}
