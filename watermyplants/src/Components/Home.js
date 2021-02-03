// Home Page
// Show the plant cards here

//  url/Home

import React, { useEffect, useState } from "react";
import * as yup from 'yup';

const schema = yup.object().shape({

})

export default function Home(props) {
    const [disabled, setDisabled] = useState(true);

    const { value, submit, change, pageChange } = props;

    useEffect(() => {
        schema.isValid(value).then(valid => setDisabled(!valid))
    }, [value])

    const onSubmit = (evt) => {
        evt.preventDefault();
    submit();
    };

    const onChange = (evt) => {
        const { name, value } = evt.target;
    change(name, value);
    };

    return (
        
    )
}