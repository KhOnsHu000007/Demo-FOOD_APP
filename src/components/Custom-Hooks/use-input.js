import { useState } from "react";

const useInput = (validate) => {
    const [value, setValue] = useState('')
    const [touched, setTouched] = useState(false)


    const valueIsValid = validate(value)
    const valueIsInvalid = !valueIsValid && touched


    const setValueHandler = (event) => {
        setValue(event.target.value)
    }

    const setBlurHandler = (msg) => {
        setTouched(true)
    }
    const reset = () => {
        setValue('');
        setTouched(false);
    };

    return ({
        value: value,
        isValid: valueIsValid,
        isInvalid: valueIsInvalid,
        valueHandler: setValueHandler,
        blurHandler: setBlurHandler,

        reset
    })
}

export default useInput