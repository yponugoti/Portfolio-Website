import styles from './Skills.module.css';

function Skills() {
    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <span>
                    <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python Icon" />
                    <p>Python</p>
                    <hr />
                    <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python Icon" />
                    <p>Python3</p>
                </span>
            </div>
        </section>
      );
}

export default Skills;