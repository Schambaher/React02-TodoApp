import { ChangeEvent, useState } from "react";

interface useFormProps<T> {
    handleInputChange: (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => void;
    reset: () => void
    formValues: T
}

export const useForm = <T>(initialState: T): useFormProps<T> => {

    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = ({target}: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>): void => {

        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const reset = () => {
        setFormValues(initialState);
    }

    return {
        handleInputChange,
        reset,
        formValues
    }

}
