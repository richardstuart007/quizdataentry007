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
    minWidth: 0,
    margin: theme.spacing(0.5)
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    '& .MuiButton-label': {
      color: theme.palette.secondary.main
    }
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    '& .MuiButton-label': {
      color: theme.palette.primary.main
    }
  }
}))
//
// Debugging
//
let g_log1 = false
//=====================================================================================
export default function MyActionButton(props) {
  if (g_log1) console.log('Start MyActionButton')

  const { color, children, onClick } = props
  const classes = useStyles()
  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  )
}
