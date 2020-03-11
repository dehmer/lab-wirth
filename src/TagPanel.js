import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const DarkRed = 'darkred'
const RedSalsa = '#fd3a4a' // https://encycolorpedia.com/fd3a4a
const PinkRed = '#c50212' // https://encycolorpedia.com/c50212
const Firebrick = "#b22222"

const TagColor = Firebrick

const useStyles = makeStyles(theme => ({
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
    border: `1px solid ${TagColor}`,
    borderRadius: '3px',
    color: TagColor,
    fontSize: '.65rem',
    letterSpacing: '1px',
    padding: '.1rem .2rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    marginTop: '4px',
    marginRight: '6px'
  },

  tagPlaceholder: {
    pointerEvents: 'none',
    border: `1px dashed ${TagColor}`,
    borderRadius: '3px',
    color: TagColor,
    fontSize: '.65rem',
    letterSpacing: '1px',
    padding: '.1rem .2rem',
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

const TagPlaceholder = props => {
  const classes = useStyles()
  const { label = '+' } = props
  const component = label
    ? <div className={classes.tagPlaceholder}>{label.toUpperCase()}</div>
    : <></>
  return component
}

export default props => {
  const classes = useStyles()
  const { tags = [] } = props
  return (
    <div className={classes['tag-area']}>
      {
        tags
          .filter(tag => tag)
          .map(tag => <Tag key={tag} label={tag}></Tag>)
          .concat([<TagPlaceholder key={0}/>])
      }
    </div>
  )
}
