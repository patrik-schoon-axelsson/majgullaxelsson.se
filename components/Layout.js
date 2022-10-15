import NavBar from "./navigation/NavBar";

const Layout = ({ children }) => {
    return (
        <>
        <NavBar />
            <main>
                {children}
            </main>
        </>
    )
};

export default Layout