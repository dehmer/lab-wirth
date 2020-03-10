import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
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

  'layer-group': {
    fontFamily: 'adelle-sans, sans-serif',
    fontSize: '90%',
    padding: '4px',
    marginBottom: '4px',
    borderBottom: '1px solid #cccccc'
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
    margin: '3px'
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

export default function SelectedListItem() {
  const classes = useStyles()

  // const [selectedUri, setSelectedUri] = React.useState(null)
  // const handleListItemClick = (event, uri) => {
  //   setSelectedUri(uri);
  // }

  const listItem = group => {
    return (
      <div
        key={group.uri}
        className={classes['layer-group']}
      >
        <b>{group.organization}</b> — {group.title}
        <div className={classes['tag-area']}>
          <Tag label={group.affiliation}></Tag>
          <Tag label={group.role}></Tag>
          <Tag label={group.type}></Tag>
          <Tag label={group.classification}></Tag>
        </div>
      </div>
    )
  }

  return (
    <List className={classes.list}>
      { layers.map(listItem) }
    </List>
  )
}
