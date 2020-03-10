import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import layers from './layers.json'

const useStyles = makeStyles(theme => ({
  list: {
    maxHeight: '0px' // can be any value?
  },

  inline: {
    display: 'inline'
  },

  layer: {
    backgroundColor: 'white'
  },

  item: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '50px auto 50px',
    gridTemplateAreas: '"L C R"',
    marginBottom: '4px',
    padding: '4px',
    borderBottom: '1px solid #cccccc',
    fontFamily: 'adelle-sans, sans-serif',
    fontSize: '90%'
  },

  itemLeft: {
    gridArea: 'L',
    alignSelf: 'center'
  },

  itemCenter: {
    gridArea: 'C',
    justifySelf: 'start',
    alignSelf: 'center'
  },

  itemRight: {
    gridArea: 'R',
    justifySelf: 'end',
    alignSelf: 'center'
  },

  'tag-area': {
    marginTop: '4px',
    marginBottom: '4px',
    display: 'flex',
    flexWrap : 'wrap',
    alignContent: 'flex-start',
    fontWeight: 100
  },

  tag: {
    pointerEvents: 'none',
    border: '1px solid darkred',
    borderRadius: '3px',
    color: 'darkred',
    fontSize: '.65rem',
    // height: '1.5rem',
    // lineHeight: '1.5rem',
    letterSpacing: '1px',
    padding: '.2rem .3rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    marginTop: '4px',
    marginRight: '6px'
  }
}))

const Tag = props => {
  const classes = useStyles()
  const { label } = props
  const component = label
    ? <div className={classes.tag}>{label.toUpperCase()}</div>
    : <></>
  return component
}

export default function NestedList() {
  const classes = useStyles()
  const [enabled, setEnabled] = React.useState({})

  // const [selectedUri, setSelectedUri] = React.useState(null)
  // const handleListItemClick = (event, uri) => {
  //   setSelectedUri(uri);
  // }

  const handleEnabledSwitch = uri => () => {
    const state = { ...enabled }
    state[uri] = !!enabled[uri]
    setEnabled(state)
  }

  const groupItem = group => {
    return (
      <div className={classes.item} key={group.uri}>
        <Switch
          className={classes.itemLeft}
          checked={enabled[group.uri]}
          onChange={handleEnabledSwitch(group.uri)}
          color="primary"
        />
        <div
          className={classes.itemCenter}
        >
          <b>{group.organization}</b> — {group.title}
          <div className={classes['tag-area']}>
            <Tag label={group.affiliation}></Tag>
            <Tag label={group.role}></Tag>
            <Tag label={group.type}></Tag>
            <Tag label={group.classification}></Tag>
          </div>
        </div>
        <IconButton className={classes.itemRight} color="primary">
          <MoreVertIcon />
        </IconButton>
      </div>
    )
  }

  return (
    <List className={classes.list}>
      { layers.map(groupItem) }
    </List>
  )
}
