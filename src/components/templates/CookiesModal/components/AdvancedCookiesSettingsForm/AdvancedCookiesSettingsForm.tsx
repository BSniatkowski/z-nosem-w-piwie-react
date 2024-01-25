import { useMemo } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
import * as yup from 'yup'

import Form from '../../../../organisms/Form/Form'
import messages from './AdvancedCookiesSettingsForm.messages'
import {
    IAdvancedCookiesSettingsFormFieldsValues,
    IAdvancedCookiesSettingsFormProps,
    TAdvancedCookiesSettingsFormFields,
} from './AdvancedCookiesSettingsForm.types'

const AdvancedCookiesSettingsForm: React.FC<IAdvancedCookiesSettingsFormProps> = ({
    buttonsElement,
}) => {
    const intl = useIntl()

    const fields = useMemo<TAdvancedCookiesSettingsFormFields>(
        () => [
            {
                name: 'essential',
                type: 'accordionSwitch',
                title: intl.formatMessage(messages.essentialLabel),
                children: <FormattedMessage {...messages.essentialDescription} />,
                defaultChecked: true,
                disabled: true,
            },
            {
                name: 'performance',
                type: 'accordionSwitch',
                title: intl.formatMessage(messages.performanceLabel),
                children: <FormattedMessage {...messages.performanceDescription} />,
                defaultChecked: true,
            },
            {
                name: 'functional',
                type: 'accordionSwitch',
                title: intl.formatMessage(messages.functionalLabel),
                children: <FormattedMessage {...messages.functionalDescription} />,
                defaultChecked: true,
            },
            {
                name: 'advertising',
                type: 'accordionSwitch',
                title: intl.formatMessage(messages.advertisingLabel),
                children: <FormattedMessage {...messages.advertisingDescription} />,
                defaultChecked: true,
            },
            {
                name: 'social',
                type: 'accordionSwitch',
                title: intl.formatMessage(messages.socialLabel),
                children: <FormattedMessage {...messages.socialDescription} />,
                defaultChecked: true,
            },
            {
                name: 'analytics',
                type: 'accordionSwitch',
                title: intl.formatMessage(messages.analyticsLabel),
                children: <FormattedMessage {...messages.analyticsDescription} />,
                defaultChecked: true,
            },
        ],
        [intl],
    )

    const validationSchema = yup
        .object({
            essential: yup.boolean().isTrue().required(),
            performance: yup.boolean().required(),
            functional: yup.boolean().required(),
            advertising: yup.boolean().required(),
            social: yup.boolean().required(),
            analytics: yup.boolean().required(),
        })
        .required()

    const onSubmit: SubmitHandler<IAdvancedCookiesSettingsFormFieldsValues> = (data) => {
        console.log(data)
    }

    return (
        <Form<IAdvancedCookiesSettingsFormFieldsValues>
            fields={fields}
            validationSchema={validationSchema}
            buttonsElement={buttonsElement}
            onSubmit={onSubmit}
        />
    )
}

export default AdvancedCookiesSettingsForm
