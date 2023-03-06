import {Field, Formik, useFormikContext,} from 'formik';
import {useEffect, useState} from "react";

export const FormWrap = () => {

    return (
        <Formik initialValues={{login: ""}} onSubmit={() => {
        }}>
            <FormTest/>
        </Formik>
    )
}
const FormTest = () => {
    const {setFieldValue} = useFormikContext()
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        e.preventDefault()
        setFieldValue("login", 111)
    }

    useEffect(() => {

        setTimeout(() => setFieldValue("login","egor"), 2000)

    }, [])
    return (
        <form onSubmit={handleChange}>
            <Field name="login">
                {({field}) => {
                    return (
                        <input
                            type="text"
                            name={field.name}
                            value={field.value}
                            onChange={(event) => setValue(event.target.value)}
                            placeholder="login"
                        />
                    )
                }}
            </Field>
        </form>
    )
};
