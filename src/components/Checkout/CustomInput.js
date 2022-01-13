import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useForm, useFormContext, Controller } from 'react-hook-form';

const CustomInput = ({ name, label }) => {
    const { control } = useFormContext();
    // const { register } = useForm();
    return (
        <Grid item xs={12} sm={6} >
             <Controller  control={control}
            //   {...register(name)} 
              name={name}
              render={({ field }) => {
                return <TextField {...field} fullWidth label={label} />;  
              }} 
            //    render={({})=> ( <TextField fullWidth label={label} required /> )} 
               />
        </Grid>
    )
}

export default CustomInput;
