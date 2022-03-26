//
//  Libraries
//
import { Button } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
//
//  Styles
//
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5)
  },
  label: {
    textTransform: 'none'
  }
}))
//
// Debugging
//
let g_log1 = false
//=====================================================================================
export default function MyButton(props) {
  if (g_log1) console.log('Start MyButton')

  const { text, size, color, variant, onClick, ...other } = props
  const classes = useStyles()

  return (
    <Button
      variant={variant || 'contained'}
      size={size || 'small'}
      color={color || 'primary'}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </Button>
  )
}
