import { useCallback, useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

import { useBreakpoint } from '../../../hooks/useBreakpoint/useBreakpoint'
import Button from '../../atoms/Button/Button'
import Modal from '../../organisms/Modal/Modal'
import AdvancedCookiesSettingsForm from './components/AdvancedCookiesSettingsForm/AdvancedCookiesSettingsForm'
import messages from './CookiesModal.messages'
import * as S from './CookiesModal.style'

const CookiesModal = () => {
    const intl = useIntl()

    const isMobile = useBreakpoint('mobile')

    const [isActive, setIsActive] = useState(true)
    const [isAdvancedActive, setIsAdvanceActive] = useState(false)

    const onAcceptClick = useCallback(() => {
        setIsActive(false)
        setIsAdvanceActive(false)
    }, [])

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
                            onClick={onAcceptClick}
                        />
                    </S.ButtonsContainer>
                </S.CookiesModalInnerContainer>
            </Modal>
            <Modal isActive={isAdvancedActive} onClose={() => setIsAdvanceActive(false)}>
                <S.CookiesModalInnerContainer>
                    <p>
                        <FormattedMessage {...messages.mainCookiesTextPart1} />
                        <br />
                        <FormattedMessage {...messages.mainCookiesTextPart2} />
                    </p>
                    <AdvancedCookiesSettingsForm
                        buttonsElement={
                            <S.ButtonsContainer $isMobile={isMobile}>
                                <Button
                                    size={isMobile ? 'full' : 'fit'}
                                    variant='outlined'
                                    label={intl.formatMessage(messages.saveAdvancedSettings)}
                                    onClick={onAcceptClick}
                                />
                                <Button
                                    size={isMobile ? 'full' : 'fit'}
                                    label={intl.formatMessage(messages.accept)}
                                    onClick={onAcceptClick}
                                />
                            </S.ButtonsContainer>
                        }
                    />
                </S.CookiesModalInnerContainer>
            </Modal>
        </>
    )
}

export default CookiesModal
