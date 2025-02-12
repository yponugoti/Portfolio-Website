import styles from './Hero.module.css';
import HeroPfp from '../../assets/HeroPfp.jpeg';
import linkedinIcon from '../../assets/linkedinIcon.png';
import githubIcon from '../../assets/githubIcon.png';

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.pfp} src={HeroPfp} alt="Profile Picture" />
      </div>
      <div className={styles.info}>
        <h1> Yaswanth <br /> Ponugoti </h1>
        <h2> Software Engineer </h2>
        <span>
          <a href="www.linkedin.com/in/yaswanth-ponugoti" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="www.linkedin.com/in/yaswanth-ponugoti" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <p>
          Short BIO!
        </p>
        <a href={"https://google.com"} className={styles.button}>
          <button className={styles.button} download>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;