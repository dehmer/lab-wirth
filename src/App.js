import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Spotlight from './Spotlight'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  overlay: {
    pointerEvents: 'none',
    backgroundColor: 'lightgray',
    position: 'fixed',
    top: '1em',
    left: '1em',
    bottom: '1.5em',
    right: '1em',
    zIndex: 20,

    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: '5em auto', // OSD, contentPanel
    gridGap: '1em',

    gridTemplateAreas: `
      "OSD"
      "CONTENT"
    `
  },

  osd: {
    borderStyle: 'dashed',
    borderColor: 'black',
    borderWidth: 1,
    gridArea: 'OSD'
  },

  contentPanel: {
    // borderStyle: 'dashed',
    // borderColor: 'red',
    // borderWidth: 1,

    gridArea: 'CONTENT',
    display: 'grid',
    gridTemplateColumns: '25em auto 25em',
    gridTemplateRows: '1fr 3fr', // allow 3fr for bottom panel
    gridGap: '1em',
    gridTemplateAreas: `
      "L . R"
      "L B R"
    `
  },

  leftPanel: {
    // borderStyle: 'dashed',
    // borderColor: 'green',
    // borderWidth: 1,
    pointerEvents: 'auto',
    borderRadius: '6px', // default: 4px
    gridArea: 'L',
  },

  rightPanel: {
    pointerEvents: 'auto',
    borderRadius: '6px', // default: 4px
    gridArea: 'R',
    borderStyle: 'dashed',
    borderColor: 'green',
    borderWidth: 1
  },

  bottomPanel: {
    pointerEvents: 'auto',
    borderRadius: '6px', // default: 4px
    gridArea: 'B',

    overflow: 'auto',
    display: 'flex',
    flexWrap : 'wrap',
    alignContent: 'flex-start',
    fontFamily: 'adelle-sans, sans-serif',
    fontWeight: 100,
    padding: 4
  },

  tag: {
    pointerEvents: 'none',
    border: '1px solid darkred',
    borderRadius: '3px',
    color: 'darkred',
    fontSize: '.75rem',
    height: '1.5rem',
    lineHeight: '1.5rem',
    letterSpacing: '1px',
    padding: '0 .5rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    margin: '3px'
  }
}))

const Tag = props => {
  const classes = useStyles()
  const { label = 'S2' } = props
  return (
    <div className={classes.tag}>{label.toUpperCase()}</div>
  )
}

export default function App() {
  const classes = useStyles()
  return (
      <div className={classes.overlay}>
        <div className={classes.osd}></div>
        <div className={classes.contentPanel}>
          <div className={classes.leftPanel}></div>
          <Spotlight className={classes.rightPanel}/>
          <Paper className={classes.bottomPanel} elevation={4}>
            <Tag label='CORENU'></Tag>
            <Tag label='FRDNEU'></Tag>
            <Tag label='FRNENO'></Tag>
            <Tag label='GLBSGN'></Tag>
            <Tag label='PLNORD'></Tag>
            <Tag label='UNCORR'></Tag>

            <Tag label='Correlated enemy and unknown'></Tag>
            <Tag label='Friendly and neutral (organisational)'></Tag>
            <Tag label='Friendly and neutral (non-organisational)'></Tag>
            <Tag label='Globally significant'></Tag>
            <Tag label='Plans/Orders'></Tag>
            <Tag label='Uncorrelated enemy and unknown'></Tag>

            <Tag label='unclassified'></Tag>
            <Tag label='BMLV'></Tag>

            <Tag label='S2'></Tag>
            <Tag label='S3'></Tag>
            <Tag label='S4'></Tag>
            <Tag label='S6'></Tag>
          </Paper>
        </div>
      </div>
  )
}