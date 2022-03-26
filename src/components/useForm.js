//
//  Libraries
//
import { useState } from 'react'
import makeStyles from '@mui/styles/makeStyles'
//
// Constants
//
let g_log1 = false
//=====================================================================================
export function useForm(initialFValues, validateOnChange = false, validate) {
  if (g_log1) console.log('Start useForm')
  //
  //  State
  //
  const [values, setValues] = useState(initialFValues)
  const [errors, setErrors] = useState({})
  //
  //  Handle change and Validate
  //
  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
    if (validateOnChange) validate({ [name]: value })
  }
  //
  //  Reset the form to Initial Values
  //
  const resetForm = () => {
    setValues(initialFValues)
    setErrors({})
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  }
}
//
//  Styles
//
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}))
//
//  Form
//
export function Form(props) {
  if (g_log1) console.log('Start Form')
  const classes = useStyles()
  const { children, ...other } = props
  return (
    <form className={classes.root} autoComplete='off' {...other}>
      {props.children}
    </form>
  )
}
