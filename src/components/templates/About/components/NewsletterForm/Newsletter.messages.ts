import { defineMessages } from 'react-intl'

export default defineMessages({
    newsletterJoinButton: {
        id: 'app.about.NewsletterForm.newsletterJoinButton',
        description: "Form activating button for joining establishment's newsletter.",
        defaultMessage: 'Ok!',
    },
    newsletter: {
        id: 'app.about.NewsletterForm.newsletter',
        description: "Invitation to join the establishment's newsletter.",
        defaultMessage: 'Join our newsletter',
    },
    FormLoaderMessage: {
        id: 'app.about.NewsletterForm.FormLoaderMessage',
        description: 'Form newsletter loader message.',
        defaultMessage: 'Signing you to newsletter',
    },
    FormSnackbarMessage: {
        id: 'app.about.NewsletterForm.FormSnackbarMessage',
        description: 'Snackabar message after newsletter signed.',
        defaultMessage: 'Thank you for joining our newsletter. See you soon!',
    },
})
