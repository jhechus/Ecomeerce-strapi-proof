import * as yup from 'yup';

export function initialValues() {
    return{
        identifier: "",
        password: "",
    };
}

export function validationSchema(){
    return yup.object({
        identifier: yup.string().required(true),
        password: yup.string().required(true)
    });
}