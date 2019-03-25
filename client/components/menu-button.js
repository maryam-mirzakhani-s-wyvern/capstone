import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import toRenderProps from 'recompose/toRenderProps'
import withState from 'recompose/withState'
import history from '../history'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null))

function RenderPropsMenu() {
  return (
    <WithState>
      {({anchorEl, updateAnchorEl}) => {
        const open = Boolean(anchorEl)
        const handleClose = () => {
          updateAnchorEl(null)
        }
        function menuClick(event) {
          handleClose()
          const option = event.target.innerHTML.split('<')[0]
          if (option === 'Plan') {
            history.push('/morningform')
          } else if (option === 'View') {
            history.push('/today')
          } else if (option === 'Reflect') {
            history.push('/eveningform')
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
            >
              Your Day
            </Button>
            <Menu
              id="render-props-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={menuClick}>Plan</MenuItem>
              <MenuItem onClick={menuClick}>View</MenuItem>
              <MenuItem onClick={menuClick}>Reflect</MenuItem>
              {/* <MenuItem key={item.key} value={value} style={{backgroundColor: 'red', color: 'white'}} primaryText={item.name}/> */}
            </Menu>
          </React.Fragment>
        )
      }}
    </WithState>
  )
}

export default RenderPropsMenu
