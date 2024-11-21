export default function AnimalCard(params) {
    
    const AnimalCard=({animal,onClick})=>(
        <div className="animal-card" onClick={()=> onClick(animal.name)}>
            <img src={animal.img} alt={animal.name}/>
            <p>{animal.name}</p>
        </div>
    )
}