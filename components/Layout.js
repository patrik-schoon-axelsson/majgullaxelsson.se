import Footer from "./Footer";
import NavBar from "./navigation/NavBar";

const Layout = ({ children }) => {
    return (
        <>
        <NavBar />
            <main style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh"
            }}>
                {children}
            </main>
        <Footer />
        </>
    )
};

export default Layout