//
//  Libraries
//
import { Snackbar } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Alert } from '@mui/material'
//
//  Debug Settings
//
import debugSettings from '../debug/debugSettings'
//
//  Styles
//
const useStyles = makeStyles(theme => ({
  root: {
    top: theme.spacing(9)
  }
}))
//
// Debug Settings
//
const g_log1 = debugSettings()
//=====================================================================================
export default function Notification(props) {
  if (g_log1) console.log('Start Notification')

  const { notify, setNotify } = props

  const classes = useStyles()
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setNotify({
      ...notify,
      isOpen: false
    })
  }

  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert severity={notify.severity} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  )
}
