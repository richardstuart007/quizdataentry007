//
//  Libraries
//
import { FormControl, FormControlLabel, Checkbox } from '@mui/material'
//
//  Debug Settings
//
import debugSettings from '../../debug/debugSettings'
//
// Debug Settings
//
const g_log1 = debugSettings()
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
