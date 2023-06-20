// NameList.js
import React, { useState, useEffect } from "react";
import babyNamesData from "./babyNamesData.json";
import useSound from "use-sound";
import clickSound from "./click.mp3";
import { StyledButton, Name, StyledSearchBar, NameGrid } from "./styles";

function NameList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );
  const [genderFilter, setGenderFilter] = useState("all");
  const [play] = useSound(clickSound);
  const [names, setNames] = useState(
    babyNamesData.sort((a, b) => a.name.localeCompare(b.name))
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const addFavourite = (babyName) => {
    play();
    setFavourites([...favourites, babyName]);
  };

  const removeFavourite = (id) => {
    play();
    setFavourites(favourites.filter((babyName) => babyName.id !== id));
  };

  const shuffleNames = () => {
    play();
    setNames((names) => [...names].sort(() => Math.random() - 0.5));
  };

  const getRandomName = () => {
    play();
    const randomName = names[Math.floor(Math.random() * names.length)];
    alert(`Your random name is: ${randomName.name}`);
  };

  const filteredNames = names.filter(
    (babyName) =>
      babyName.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !favourites.find((favourite) => favourite.id === babyName.id) &&
      (genderFilter === "all" || babyName.sex === genderFilter)
  );

  return (
    <div>
      <StyledSearchBar
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <StyledButton onClick={() => setGenderFilter("all")}>All</StyledButton>
      <StyledButton onClick={() => setGenderFilter("m")}>Boys</StyledButton>
      <StyledButton onClick={() => setGenderFilter("f")}>Girls</StyledButton>

      <StyledButton onClick={shuffleNames}>Shuffle Names</StyledButton>
      <StyledButton onClick={getRandomName}>Get Random Name</StyledButton>

      <h2>Favourites</h2>
      <NameGrid>
        {favourites.map((babyName) => (
          <Name
            key={babyName.id}
            onClick={() => removeFavourite(babyName.id)}
            sex={babyName.sex}
          >
            {babyName.name}
          </Name>
        ))}
      </NameGrid>

      <h2>All Names</h2>
      <NameGrid>
        {filteredNames.map((babyName) => (
          <Name
            key={babyName.id}
            onClick={() => addFavourite(babyName)}
            sex={babyName.sex}
          >
            {babyName.name}
          </Name>
        ))}
      </NameGrid>
    </div>
  );
}

export default NameList;
