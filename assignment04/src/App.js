import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import AnimalCard from './AnimalCard';
import animals from './AnimalsDb';

const getRandomAniaml =()=>{
  const randomIndex = Math.floor(MAth.random()*aniamls.length)
  return animal[randomIndex].name
}
function App() {
  const [targetAnimal,setTargetAnimal]= useState(getRandomAnimal)
  const [result,setResult]=useState('')
  
  const handleAnimalClick = (selectAnimal)=>{
    if(selectAnimal === targetAnimal) {
        setResult('You Win!')
        setTargetAnimal(getRandomAnimal())
  
    } else {
        setResult('Try Again!')
    }
  }
  return (
    <div className="game">
      <h1>Find the Animal: {targetAnimal}</h1>
      <div className="animal-grid">
        {animals.map((animal) => (
          <AnimalCard 
            key={animal.name} 
            animal={animal} 
            onClick={handleAnimalClick} 
          />
        ))}
      </div>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
