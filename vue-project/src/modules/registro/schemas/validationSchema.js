import * as yup from 'yup';

const schema = yup.object({
    nombre: yup.string().required(),
    email: yup.string().email().required()
});

export default schema;