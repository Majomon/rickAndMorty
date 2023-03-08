import styles from "./Card.module.css"

export default function Card(props) {
   const {name,species,gender,image,onClose}= props
   return (
      <div className={styles.cajaCard}>
{/*           onClose={() => window.alert("Emulamos que se cierra la card")}
 */}
         <button className={styles.cardOnClick} onClick={onClose}>X</button>
         <h2 className={styles.cardName}>{name}</h2>
         <h2 className={styles.cardSpecies}>{species}</h2>
         <h2 className={styles.cardGender}>{gender}</h2>
         <img className={styles.cardImage} src={image} alt={name} /> 
      </div>
   );
}
