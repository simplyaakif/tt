import React from 'react';
import ArButton from "../Ar_Button";
import {useFormikContext} from "formik";

const ArFormSubmitButton = ({title}) => {
    const {handleSubmit}= useFormikContext();
    return (
        <ArButton
            onPress={handleSubmit}
            title={title}
        />
    );
};

export default ArFormSubmitButton;