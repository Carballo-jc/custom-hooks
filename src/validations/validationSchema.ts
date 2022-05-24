import * as Yup from 'yup';


export const validationSchema = Yup.object({
    firstName: Yup.string()
                    .max(15, 'Debe de tener 15 caracteres o menos')
                    .required('Requerido'),
    lastName: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('Requerido'),
    email: Yup.string()
                .email('El correo no tiene un formato válido')
                .required('Requerido'),
    terms: Yup.boolean()
                .oneOf([true], 'Debe de aceptar las condiciones'),
    jobType: Yup.string()
                .notOneOf([ 'it-jr' ], 'Esta opción no es permitida.')
                .required('Requerido')
})