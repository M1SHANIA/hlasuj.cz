import {FaGithub, FaArrowCircleUp} from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
    const scrollToTop = (event) => {
        event.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.linkWrapper}>
                <a href="/" className={styles.backToTop} onClick={scrollToTop}>
                    <FaArrowCircleUp className={styles.icon} size={20} /> Back to top
                </a>
            </div>
        </footer>
    )
}

export default Footer
