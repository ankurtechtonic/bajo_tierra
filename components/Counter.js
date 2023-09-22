import styles from '../public/styles/Counter.module.css'


const Counter = ({
    counts,
    title,
    text
}) => {
    return (
        <div className={styles.wrapper} data-aos="fade-in" data-aos-delay="100"  data-aos-once="true">
            <h2> { counts + '+'} </h2>
            <h5> { title } </h5>
            <p> { text } </p>
        </div>
    )
}

export default Counter;