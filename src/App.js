import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NestedList from './NestedList'
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
    overflow: 'auto',
    pointerEvents: 'auto',
    borderRadius: '6px', // default: 4px
    gridArea: 'L',
    backgroundColor: '#fffafa' // snow: https://encycolorpedia.com/fffafa
  },

  rightPanel: {
    overflow: 'auto',
    pointerEvents: 'auto',
    borderRadius: '6px', // default: 4px
    gridArea: 'R'
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

export default function App() {
  const classes = useStyles()
  return (
      <div className={classes.overlay}>
        <div className={classes.osd}></div>
        <div className={classes.contentPanel}>
          {/* <div className={classes.leftPanel}></div> */}
          <Paper className={classes.leftPanel} elevation={4}>
            <NestedList/>
          </Paper>
        </div>
      </div>
  )
}