import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import "../styles/Filter-component.css";
import pokemons from "../data/pokemons.json";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const FilterComponent = () => {
  type Pokemon = {
    id: number;
    name: string;
    types: string[];
    image_url: string;
  };

  const { theme, toggleTheme } = useTheme();
  const [selectedType, setSelectedType] = useState<string>("all");
  const [types, setTypes] = useState<string[]>([]);
  const [filtrarPokemons, setFiltrarPokemons] = useState<Pokemon[]>(pokemons);

  useEffect(() => {
    const Types = new Set<string>();
    pokemons.forEach((pokemon) => {
      pokemon.types.forEach((type) => Types.add(type));
    });
    setTypes(Array.from(Types).sort());
  }, []);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setSelectedType(value);

    if (value === "all") {
      setFiltrarPokemons(pokemons);
    } else {
      const filtrar = pokemons.filter((pokemon) =>
        pokemon.types.includes(value)
      );
      setFiltrarPokemons(filtrar);
    }
  };

  return (
    <div className="filter">
      <div className="filter-container">
        <div className="filter-header">
          <div className="header-top">
            <h2>Filter</h2>
            <div className="header-actions">
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "🌙" : "☀️"}
              </button>
              <Link to="/" className="back-button">← Back</Link>
            </div>
          </div>
          <p>
            Descripción: Este componente filtra Pokémones por tipo desde el
            archivo JSON.
          </p>
        </div>
        <div className="filter-demo">
          <div className="filter-form">
            <form action="">
              <label htmlFor="type-select">Filter by type</label>
              <select
                id="type-select"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option value="all">All types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="filter-list">
            {filtrarPokemons.map((pokemon) => (
              <div key={pokemon.id} className="pokemon-card">
                <img
                  className="pokemon-img"
                  src={pokemon.image_url}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
                <p>({pokemon.types.join(", ")})</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
