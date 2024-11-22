import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import './PokemonList.css'
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";


const PokemonCard = ({ name, image, ability, id, favorite }) => {
    const dispatch = useDispatch()
    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }
    return (
        <Card
            style={{ width: 250 }}
            title={name}
            cover={<img src={image} alt={name} style={{ margin: 20, width: 150, height: 150 }} />}
            extra={<StarButton isFavorite={favorite} onclick={handleOnFavorite} />}

        >
            <Meta
                description={ability.map((habilidad) => (
                    `${habilidad.ability.name}, `
                ))}
            />
        </Card>
    );
}

export default PokemonCard; 