//
//  Libraries
//

import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SearchIcon from '@mui/icons-material/Search'
//
//  Styles
//
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff'
  },
  searchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}`,
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2'
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1)
    }
  }
}))
//
// Debugging
//
let g_log1 = false
//=====================================================================================
export default function Header() {
  if (g_log1) console.log('Start Header')

  const classes = useStyles()

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid item>
            <InputBase
              placeholder='Search topics'
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize='small' />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton size='large'>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsNoneIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton size='large'>
              <Badge badgeContent={3} color='primary'>
                <ChatBubbleOutlineIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton size='large'>
              <PowerSettingsNewIcon fontSize='small' />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
