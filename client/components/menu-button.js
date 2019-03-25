import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import toRenderProps from 'recompose/toRenderProps'
import withState from 'recompose/withState'
import history from '../history'

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null))

const styles = {
  // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  // borderRadius: 3,
  // border: 0,
  color: 'orange'
  // height: 48,
  // padding: '0 30px',
  // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
}

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
              style={styles}
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
            </Menu>
          </React.Fragment>
        )
      }}
    </WithState>
  )
}

export default RenderPropsMenu
