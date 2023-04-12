import { Icon } from '@iconify/react';
import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Dropzone from 'react-dropzone';

//Todo: implement style for textfields

export const FilterField = (props: any) => {
  const { type, name, filterLabel, required, defaultValue } = props;

  return (
    <>
      {type === 'select' ? (
        <Grid item md={12} xs={12}>
          <Grid container>
            <Grid item md={6} xs={6} display="flex" alignItems="center">
              <Typography>{filterLabel}</Typography>
            </Grid>
            <Grid item md={6} xs={6}>
              <TextField
                select
                fullWidth
                variant="standard"
                margin="normal"
                {...props}
                SelectProps={{ native: true }}
              >
                {props.options.map((option, idx) => (
                  <option key={idx} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};
