import styles from "./landingpage.module.css";

export default function LandingPage(){

  return(

    


    <div className={styles.pigContainer}>
       <div>
        <img src="/images/clouds.png" className={styles.cloud1} />
        <img src="/images/dealio logo by Alexa Pedowitz on linkedin.webp" className={styles.pig}/>
        <img src="/images/clouds.png" className={styles.cloud2} />
      </div>
      {/* <img src="/images/dealio logo by Alexa Pedowitz on linkedin.webp" className={styles.pig}/> */}
      <div className={styles.para}><p>Killer Deals at Local Businesses, Right at Your Mobile Phone</p></div>
    </div>

  );
}