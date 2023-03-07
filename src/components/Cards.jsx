import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return <div>
      {characters.map((character)=>{
         return <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
/*             onClose={()=>{console.log(`Cerrando ${character.name}`);}} */
         />
      })}
   </div>;
}
