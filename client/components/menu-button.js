import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import toRenderProps from 'recompose/toRenderProps'
import withState from 'recompose/withState'
import history from '../history'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null))

const style = {
  color: 'white'
}

function RenderPropsMenu(props) {
  const options = props.options
  const paths = props.paths
  return (
    <WithState>
      {({anchorEl, updateAnchorEl}) => {
        const open = Boolean(anchorEl)
        const handleClose = () => {
          updateAnchorEl(null)
        }
        function menuClick(event) {
          handleClose()
          const target = event.target.innerHTML.split('<')[0]
          for (let i = 0; i < options.length; i++) {
            if (options[i] === target) {
              history.push(paths[i])
            }
          }
        }
        return (
          <React.Fragment>
            <Button
              aria-owns={open ? 'render-props-menu' : undefined}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget)
              }}
              style={style}
            >
              {props.title}
            </Button>
            <Menu
              id="render-props-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {options.map(option => (
                <MenuItem key={option} onClick={menuClick}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        )
      }}
    </WithState>
  )
}

export default RenderPropsMenu
