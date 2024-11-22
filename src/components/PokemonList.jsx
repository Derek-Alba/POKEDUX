import PokemonCard from "./PokemonCard";
import './PokemonList.css'
const PokemonList = ({ pokemons }) => {
    return (
        <>
            <div className="PokemonList">
                {pokemons.map((pokemon, index) =>
                    <PokemonCard
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        ability={pokemon.abilities}
                        key={index}
                        id={pokemon.id}
                        favorite={pokemon.favorite}
                    />
                )}
            </div>
        </>
    );

}


export default PokemonList;