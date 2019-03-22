import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import toRenderProps from 'recompose/toRenderProps'
import withState from 'recompose/withState'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null))

function menuClick(event) {
  console.log(event.target.value)
}

function RenderPropsMenu() {
  return (
    <WithState>
      {({anchorEl, updateAnchorEl}) => {
        const open = Boolean(anchorEl)
        const handleClose = () => {
          updateAnchorEl(null)
        }

        return (
          <React.Fragment>
            <Button
              aria-owns={open ? 'render-props-menu' : undefined}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget)
              }}
            >
              Your Day
            </Button>
            <Menu
              id="render-props-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={menuClick} value="plan">
                Plan
              </MenuItem>
              <MenuItem onClick={menuClick}>View</MenuItem>
              <MenuItem onClick={menuClick}>Reflect</MenuItem>
            </Menu>
          </React.Fragment>
        )
      }}
    </WithState>
  )
}

export default RenderPropsMenu
