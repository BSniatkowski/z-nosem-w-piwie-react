import * as S from './Loader.style'
import { ILoaderProps } from './Loader.types'

const Loader: React.FC<ILoaderProps> = ({ children, isLoading, loadingMessage }) => {
    return (
        <S.LoaderContainer>
            {children}
            {isLoading && (
                <S.LoaderContent>
                    {loadingMessage && <S.LoaderMessage>{loadingMessage}</S.LoaderMessage>}
                    <S.SLoader />
                </S.LoaderContent>
            )}
        </S.LoaderContainer>
    )
}

export default Loader
