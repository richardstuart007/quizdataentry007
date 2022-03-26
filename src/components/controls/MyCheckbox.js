//
//  Libraries
//
import { FormControl, FormControlLabel, Checkbox } from '@mui/material'
//
// Debugging
//
let g_log1 = false
//=====================================================================================
export default function MyCheckbox(props) {
  if (g_log1) console.log('Start MyCheckbox')

  const { name, label, value, onChange, ...other } = props

  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value
    }
  })

  return (
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            color='primary'
            checked={value}
            {...other}
            onChange={e =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  )
}
