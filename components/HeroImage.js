import styles from "../styles/HeroImage.module.css";

const HeroImage = (props) => {
    return (
        <div className={styles.heroImage}>
            <h1 className="pt-5 m-3 text-center">Majgull Axelsson</h1>
            <br />
            <p className="m-5 text-center">Författare, journalist, debattör.</p>
        </div>
    )
};

export default HeroImage