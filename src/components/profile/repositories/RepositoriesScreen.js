import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { queryRepositories } from "../../../constants/queries";
import { Loader } from "../../ui/Loader";
import { RepositoriesFilterer } from "./RepositoriesFilterer";
import { RepositoriesTable } from "./RepositoriesTable";

export const RepositoriesScreen = () => {

  const [repositories, setRepositories] = useState([]);
  const [optionSelected, setOptionSelected] = useState();

  const filterRepositoryByOption = (option) => {
    if (option === "1") {
      setRepositories(Array.from([...data.user.repositories.nodes]));
    }
    if (option === "2") {
      setRepositories([]);
    }
  }

  const filterRepositoryByName = (text) => {
    const filteredRepositories = [...data.user.repositories.nodes].filter((repository) => repository.name.toLocaleLowerCase().includes(text.trim()));
    setRepositories(filteredRepositories)
  }

  const addFavorite = (selectedRepository) => {
    console.log("Seleccionado ", selectedRepository);
  }

  const { data, loading } = useQuery(gql`${queryRepositories}`, {
    variables: { login: 'tapas2000' },
  });


  useEffect(() => {
    setRepositories(data ? Array.from([...data.user.repositories.nodes]) : [])
  }, [data])


  return (
    <div className="container">

      <RepositoriesFilterer
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        filterRepositoryByOption={filterRepositoryByOption}
        filterRepositoryByName={filterRepositoryByName}
      />
      <RepositoriesTable
        addFavorite={addFavorite}
        optionSelected={optionSelected}
        repositories={repositories}
      />
      {
        loading
        &&
        <Loader />
      }
    </div>
  )
}
