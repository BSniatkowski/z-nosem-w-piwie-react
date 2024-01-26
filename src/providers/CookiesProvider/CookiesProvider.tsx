import CookiesModal from '../../components/templates/CookiesModal/CookiesModal'

const CookiesProvider = ({ children }: { children: React.ReactElement }) => {
    return (
        <>
            {children}
            <CookiesModal />
        </>
    )
}

export default CookiesProvider
