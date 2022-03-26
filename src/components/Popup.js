//
//  Libraries
//
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import CloseIcon from '@mui/icons-material/Close'
//
//  Controls
//
import Controls from './controls/Controls'
//
//  Styles
//
const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
  },
  dialogTitle: {
    paddingRight: '0px'
  }
}))
//
// Debugging
//
let g_log1 = false
//=====================================================================================
export default function Popup(props) {
  if (g_log1) console.log('Start Popup')
  const { title, children, openPopup, setOpenPopup } = props
  const classes = useStyles()

  return (
    <Dialog
      open={openPopup}
      maxWidth='md'
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: 'flex' }}>
          <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.MyActionButton
            color='secondary'
            onClick={() => {
              setOpenPopup(false)
            }}
          >
            <CloseIcon />
          </Controls.MyActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  )
}
