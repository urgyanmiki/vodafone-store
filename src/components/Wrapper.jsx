export const Wrapper = ({ children }) => {
    return (
        <div className="wrapper position-relative">
            <img src="/bg.png"
                alt="Cloud background image"
                className="cloud-bg-img" />
            {children}
        </div>
    )
}