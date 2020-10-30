// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage'

export const useForm = initialValues => {
    const [values, setValues] = useLocalStorage('form', initialValues);

    const handleChanges = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return([values, handleChanges]);
}