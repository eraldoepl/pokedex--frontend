import { useState } from "react";
import paginate from "../Utilities/paginate";

const usePokemon = () => {
  const [searchQuey, setSearchQuey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 51;

  const handleSearch = (query) => {
    setCurrentPage(1);
    setFilterType("");
    setSearchQuey(query);
  };

  const handleFilterType = (type) => {
    setCurrentPage(1);
    setFilterType(type);
  };

  const handleResetFilter = () => {
    setSearchQuey("");
    setFilterType("");
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setSearchQuey("");
    setFilterType("");
    setCurrentPage(page);
  };

  const getPagedData = (pokemonDetails) => {
    let filtered = pokemonDetails;
    if (searchQuey) {
      filtered = pokemonDetails.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchQuey.toLowerCase())
      );
    } else if (filterType) {
      filtered = pokemonDetails.filter(({ types }) => {
        const firstPokemonType = types[0].type.name.toLowerCase();
        const secondPokemonType = types[1];

        if (firstPokemonType && secondPokemonType)
          return (
            firstPokemonType === filterType.toLowerCase() ||
            secondPokemonType.type.name.toLowerCase() ===
              filterType.toLowerCase()
          );

        return firstPokemonType === filterType.toLowerCase();
      });
    }
    const pokemonsPaginated = paginate(filtered, currentPage, pageSize);

    return { pokemonsPaginated };
  };

  return {
    handleSearch,
    handleFilterType,
    handleResetFilter,
    handlePageChange,
    getPagedData,
    searchQuey,
    filterType,
    currentPage,
    pageSize,
  };
};

export default usePokemon;
