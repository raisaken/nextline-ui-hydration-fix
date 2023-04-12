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

export const FormField = (props: any) => {
  const { type, name, label, required, defaultValue } = props;
  const [file, setFile] = useState();

  return (
    <>
      {type === 'text' ||
      type === 'tel' ||
      type === 'email' ||
      type === 'number' ||
      type === 'date' ? (
        <Grid item md={12} xs={12}>
          <TextField
            fullWidth
            margin="normal"
            variant="outlined"
            size="small"
            {...props}
          />
        </Grid>
      ) : type === 'file' ? (
        <Grid item md={12} xs={12}>
          <Typography
            sx={{
              fontSize: '14px',
              color: '#646464',
            }}
          >
            Content Cover
          </Typography>
          <Box style={{ border: '1px dashed black' }}>
            <Dropzone
              onDrop={(acceptedFiles) => {
                setFile(acceptedFiles.map((file) => URL.createObjectURL(file)));
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center',
                        padding: '14px',
                        fontSize: '12px',
                        color: '#646464',
                      }}
                    >
                      <Icon
                        icon="material-symbols:cloud-upload"
                        width={30}
                        color="#838383"
                      />
                      Click to upload or drag and drop <br />
                      SVG, PNG, JPG or GIF (max 800X400px)
                    </p>
                    <Box
                      display="flex"
                      justifyContent="end"
                      sx={{ p: 1, cursor: 'hover' }}
                    >
                      <Tooltip title="Content with a cover image get 23x more engagement than ones without.">
                        <Icon icon="ic:outline-info" />
                      </Tooltip>
                    </Box>
                  </div>
                </section>
              )}
            </Dropzone>
          </Box>
          <img
            src={file}
            alt=""
            style={{
              objectFit: 'contain',
              height: 'auto',
              width: '150px',
            }}
          />
        </Grid>
      ) : type === 'select' ? (
        <Grid item md={12} xs={12}>
          <TextField
            select
            fullWidth
            margin="normal"
            variant="outlined"
            {...props}
            size="small"
            SelectProps={{ native: true }}
          >
            {props.options.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
      ) : type === 'radio' ? (
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
      ) : type === 'tag' ? (
        <Autocomplete
          multiple
          id="tags-outlined"
          options={props.options}
          getOptionLabel={(option) => option.label}
          // defaultValue={[props.options[0]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Tags" size="small" />
          )}
        />
      ) : null}
    </>
  );
};
