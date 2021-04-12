import React from 'react';
import ArTextInput from "../Ar_TextInput";
import ArFormError from "./Ar_FormError";
import {useFormikContext} from "formik";

const ArFormInputField = ({name,...otherProps}) => {
    const {setFieldTouched,handleChange,errors,touched} =useFormikContext()
    return (
        <>
            <ArTextInput
                {...otherProps}
                onChangeText={handleChange(name)}
                onBlur={()=>setFieldTouched(name)}
            />
            <ArFormError visible={touched[name]} error={errors[name]}/>
        </>
    );
};

export default ArFormInputField;