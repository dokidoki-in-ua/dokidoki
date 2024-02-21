const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            <div
                className={`absolute bottom-0 left-0 right-0 top-[60px] bg-[url('/_background_login.png')] bg-cover 2xl:bg-contain bg-no-repeat bg-right bg-origin-content opacity-20`}
            />
            {children}
        </div>
    )
}
export default AuthLayout
