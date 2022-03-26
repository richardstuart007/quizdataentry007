//
//  Libraries
//
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material'
//
// Debugging
//
let g_log1 = false
//=====================================================================================
export default function MySelect(props) {
  if (g_log1) console.log('Start MySelect')

  const { name, label, value, error = null, onChange, options } = props

  return (
    <FormControl variant='outlined' {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} name={name} value={value} onChange={onChange}>
        {options.map(item => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
