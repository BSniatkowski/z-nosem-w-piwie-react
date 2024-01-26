import { useCallback, useMemo, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { CookiesFormRequest } from '../../../../api/api'
import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import { useSnackbarDispatch } from '../../../providers/SnackbarProvider/hooks/useSnackbarDispatch'
import { ESnackbarDispatchActions } from '../../../providers/SnackbarProvider/SnackbarProvider.types'
import Button from '../../atoms/Button/Button'
import { EFieldType } from '../../organisms/Form/Form.types'
import Modal from '../../organisms/Modal/Modal'
import AdvancedCookiesSettingsForm from './components/AdvancedCookiesSettingsForm/AdvancedCookiesSettingsForm'
import {
    IAdvancedCookiesSettingsFormFieldsValues,
    TAdvancedCookiesSettingsFormFields,
} from './components/AdvancedCookiesSettingsForm/AdvancedCookiesSettingsForm.types'
import messages from './CookiesModal.messages'
import * as S from './CookiesModal.style'

const CookiesModal = () => {
    const intl = useIntl()

    const isMobile = useBreakpoint('mobile')

    const dispatch = useSnackbarDispatch()

    const [isActive, setIsActive] = useState(true)
    const [isAdvancedActive, setIsAdvanceActive] = useState(false)

    const fields = useMemo<TAdvancedCookiesSettingsFormFields>(
        () => [
            {
                name: 'essential',
                type: EFieldType.accordionSwitch,
                title: intl.formatMessage(messages.essentialLabel),
                children: <FormattedMessage {...messages.essentialDescription} />,
                defaultChecked: true,
                readOnly: true,
            },
            {
                name: 'performance',
                type: EFieldType.accordionSwitch,
                title: intl.formatMessage(messages.performanceLabel),
                children: <FormattedMessage {...messages.performanceDescription} />,
                defaultChecked: true,
            },
            {
                name: 'functional',
                type: EFieldType.accordionSwitch,
                title: intl.formatMessage(messages.functionalLabel),
                children: <FormattedMessage {...messages.functionalDescription} />,
                defaultChecked: true,
            },
            {
                name: 'advertising',
                type: EFieldType.accordionSwitch,
                title: intl.formatMessage(messages.advertisingLabel),
                children: <FormattedMessage {...messages.advertisingDescription} />,
                defaultChecked: true,
            },
            {
                name: 'social',
                type: EFieldType.accordionSwitch,
                title: intl.formatMessage(messages.socialLabel),
                children: <FormattedMessage {...messages.socialDescription} />,
                defaultChecked: true,
            },
            {
                name: 'analytics',
                type: EFieldType.accordionSwitch,
                title: intl.formatMessage(messages.analyticsLabel),
                children: <FormattedMessage {...messages.analyticsDescription} />,
                defaultChecked: true,
            },
        ],
        [intl],
    )

    const defaultSettings = useMemo(
        () =>
            Object.fromEntries(
                fields.map(({ name, defaultChecked }) => [name, defaultChecked]),
            ) as unknown as IAdvancedCookiesSettingsFormFieldsValues,
        [fields],
    )

    const onSaveClick = useCallback(
        async (data: IAdvancedCookiesSettingsFormFieldsValues) => {
            setIsActive(false)
            setIsAdvanceActive(false)

            if (dispatch)
                dispatch({
                    type: ESnackbarDispatchActions.SHOW_SNACKBAR,
                    payload: {
                        message: intl.formatMessage(messages.saved),
                    },
                })

            await CookiesFormRequest(data)
        },
        [dispatch, intl],
    )

    const onAcceptClick = useCallback(
        async (data: IAdvancedCookiesSettingsFormFieldsValues) => {
            setIsActive(false)
            setIsAdvanceActive(false)

            if (dispatch)
                dispatch({
                    type: ESnackbarDispatchActions.SHOW_SNACKBAR,
                    payload: {
                        message: intl.formatMessage(messages.accepted),
                    },
                })

            await CookiesFormRequest(data)
        },
        [dispatch, intl],
    )

    const onSubmit = useCallback<SubmitHandler<IAdvancedCookiesSettingsFormFieldsValues>>(
        async (data) => {
            switch (data.submitType) {
                case 'save':
                    await onSaveClick(data)
                    return
                default:
                    await onAcceptClick(data)
                    return
            }
        },
        [onAcceptClick, onSaveClick],
    )

    return (
        <>
            <Modal isActive={isActive}>
                <S.CookiesModalInnerContainer>
                    <S.DisclaimerContainer>
                        <FormattedMessage {...messages.disclaimerTitle} />
                        <br />
                        <FormattedMessage {...messages.disclaimer} />
                    </S.DisclaimerContainer>
                    <p>
                        <FormattedMessage {...messages.mainCookiesTextPart1} />
                        <br />
                        <FormattedMessage {...messages.mainCookiesTextPart2} />
                        <br />
                        <br />
                        <FormattedMessage
                            {...messages.mainCookiesTextPart3}
                            values={{
                                privacyPolicy: (
                                    <S.OpenStaticModalText>
                                        <FormattedMessage {...messages.privacyPolicy} />
                                    </S.OpenStaticModalText>
                                ),
                                cookiePolicy: (
                                    <S.OpenStaticModalText>
                                        <FormattedMessage {...messages.cookiePolicy} />
                                    </S.OpenStaticModalText>
                                ),
                            }}
                        />
                        <br />
                        <br />
                        <FormattedMessage {...messages.mainCookiesTextPart4} />
                    </p>
                    <S.ButtonsContainer $isMobile={isMobile}>
                        <Button
                            size={isMobile ? 'full' : 'fit'}
                            variant='outlined'
                            label={intl.formatMessage(messages.openAdvancedSettings)}
                            onClick={() => setIsAdvanceActive(true)}
                        />
                        <Button
                            size={isMobile ? 'full' : 'fit'}
                            label={intl.formatMessage(messages.accept)}
                            onClick={() => onAcceptClick(defaultSettings)}
                        />
                    </S.ButtonsContainer>
                </S.CookiesModalInnerContainer>
            </Modal>
            <Modal
                isActive={isAdvancedActive}
                onClose={() => setIsAdvanceActive(false)}
                isScrollBehindPossible
            >
                <S.CookiesModalInnerContainer>
                    <p>
                        <FormattedMessage {...messages.mainCookiesTextPart1} />
                        <br />
                        <FormattedMessage {...messages.mainCookiesTextPart2} />
                    </p>
                    <AdvancedCookiesSettingsForm
                        fields={fields}
                        isMobile={isMobile}
                        onSubmit={onSubmit}
                    />
                </S.CookiesModalInnerContainer>
            </Modal>
        </>
    )
}

export default CookiesModal
