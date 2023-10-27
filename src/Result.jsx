import Pet from "./Pet"

const Results = ({pets})  => {
  return (
    <div className='search'>
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => (
          <Pet
            // {...pet}
            id={pet.id}
            key={pet.key}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )
    }
    </div>
  )
}

export default Results;