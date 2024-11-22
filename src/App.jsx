import { useEffect } from "react";
import { Col, Spin } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import './app.css'
import logo from './statics/logo.svg'


const App = () => {
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
  const loading = useSelector((state) => state.ui.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, []);
  return (
    <>

      <div className="app">
        <Col span={4} offset={10}>
          <img src={logo} alt="pokedex" />
        </Col>
        <Col span={8} offset={8}>
          <Searcher />
        </Col>
        {loading ?
          <Col offset={12}>
            <Spin spinning size="large" />
          </Col> : <PokemonList pokemons={pokemons} />}

      </div>

    </>
  );
}


export default App;