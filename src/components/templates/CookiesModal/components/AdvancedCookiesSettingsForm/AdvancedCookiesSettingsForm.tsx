import { useIntl } from 'react-intl'
import * as yup from 'yup'

import Button from '../../../../atoms/Button/Button'
import Form from '../../../../organisms/Form/Form'
import cookiesMessages from '../../CookiesModal.messages'
import * as S from '../../CookiesModal.style'
import {
    IAdvancedCookiesSettingsFormFieldsValues,
    IAdvancedCookiesSettingsFormProps,
} from './AdvancedCookiesSettingsForm.types'

const AdvancedCookiesSettingsForm: React.FC<IAdvancedCookiesSettingsFormProps> = ({
    isMobile,
    fields,
    onSubmit,
}) => {
    const intl = useIntl()

    const validationSchema = yup
        .object({
            essential: yup.boolean().isTrue().required(),
            performance: yup.boolean().required(),
            functional: yup.boolean().required(),
            advertising: yup.boolean().required(),
            social: yup.boolean().required(),
            analytics: yup.boolean().required(),
            submitType: yup.string().oneOf(['save', 'accept']).optional(),
        })
        .required()

    return (
        <Form<IAdvancedCookiesSettingsFormFieldsValues>
            fields={fields}
            validationSchema={validationSchema}
            variant='collapsed'
            buttonsElement={({ submitWith }) => (
                <S.ButtonsContainer $isMobile={isMobile}>
                    <Button
                        size={isMobile ? 'full' : 'fit'}
                        variant='outlined'
                        label={intl.formatMessage(cookiesMessages.saveAdvancedSettings)}
                        onClick={() => {
                            submitWith({ submitType: 'save' })
                        }}
                    />
                    <Button
                        size={isMobile ? 'full' : 'fit'}
                        label={intl.formatMessage(cookiesMessages.accept)}
                        onClick={() => {
                            submitWith({ submitType: 'accept' })
                        }}
                    />
                </S.ButtonsContainer>
            )}
            onSubmit={onSubmit}
        />
    )
}

export default AdvancedCookiesSettingsForm
