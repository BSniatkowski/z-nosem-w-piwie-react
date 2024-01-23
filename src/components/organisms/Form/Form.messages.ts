import { defineMessages } from 'react-intl'

export default defineMessages({
    requiredField: {
        id: 'app.form.requiredField',
        description: 'Form error message when field is required.',
        defaultMessage: '{fieldName} is required',
    },
    tooLongField: {
        id: 'app.form.tooLongField',
        description: 'Form error message when field is required.',
        defaultMessage: '{fieldName} cannot be longer than {max}',
    },
    emailField: {
        id: 'app.form.emailField',
        description: 'Form error message when field is required.',
        defaultMessage: 'Field must be valid email',
    },
    send: {
        id: 'app.form.send',
        description: 'Form submit button text.',
        defaultMessage: 'Send',
    },
})
