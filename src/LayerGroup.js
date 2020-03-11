import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import TagPanel from './TagPanel'

const useStyles = makeStyles(theme => ({
  item: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '50px auto 50px',
    gridTemplateAreas: '"L C R"',
    padding: '4px 8px', // top/bottom left/right
    borderBottom: '1px solid #cccccc',
    fontFamily: 'sans-serif',
  },

  layerItem: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '50px auto 50px',
    gridTemplateAreas: '"L C R"',
    padding: '4px 8px', // top/bottom left/right
    borderBottom: '1px solid #cccccc',
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f5f5',
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
}))

const VisibilitySwitch = props => {
  const classes = useStyles()
  const { visible, onVisibilityChange } = props

  return <Switch
    className={classes.itemLeft}
    checked={visible}
    onChange={onVisibilityChange}
    color="primary"
    size="small"
  />
}

const Overlay = props => {
  const classes = useStyles()
  const {overlay} = props // NOTE: group is available too
  const [visible, setVisible] = React.useState(Math.random() > 0.2)
  const onVisibilityChange = () => setVisible(!visible)

  return (
    <div className={classes.layerItem} key={overlay.uri}>
      <VisibilitySwitch visible={visible} onVisibilityChange={onVisibilityChange}/>
      <div className={classes.itemCenter}>
        {overlay.title}
        <TagPanel tags={['Overlay']}/>
      </div>
      <IconButton
        className={classes.itemRight}
        color="primary"
      >
        <MoreVertIcon />
      </IconButton>
    </div>
  )
}

export default props => {
  const classes = useStyles()
  const { group, expanded, onExpanded } = props
  const tags = [group.affiliation, group.role, group.type, group.classification]
  const [visible, setVisible] = React.useState(Math.random() > 0.2)
  const onVisibilityChange = () => setVisible(!visible)

  const overlays = (group.overlays || []).map(overlay => <Overlay
    key={overlay.uri}
    group={group}
    overlay={overlay}
  />)

  return (
    <>
      <div
        className={classes.item}
        key={group.uri}
      >
        <VisibilitySwitch visible={visible} onVisibilityChange={onVisibilityChange}/>
        <div
          className={classes.itemCenter}
        >
          <b>{group.organization}</b> — {group.title}
          <TagPanel tags={tags}/>
        </div>
        <IconButton
          className={classes.itemRight}
          color="primary"
          onClick={() => onExpanded(!expanded)}
        >
          { expanded ? <ExpandLess/> : <ExpandMore/> }
        </IconButton>
      </div>
      <Collapse
        key={':' + group.uri}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          { overlays }
        </List>
      </Collapse>
    </>
  )
}
