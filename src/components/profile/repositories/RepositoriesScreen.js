import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { END_POINT_FAVORITES } from "../../../constants/apis";
import { queryRepositories } from "../../../constants/queries";
import { fetchWithToken } from "../../../helpers/fetch";
import { Loader } from "../../ui/Loader";
import { RepositoriesFilterer } from "./RepositoriesFilterer";
import { RepositoriesTable } from "./RepositoriesTable";

export const RepositoriesScreen = () => {

  const [repositories, setRepositories] = useState([]);
  const [optionSelected, setOptionSelected] = useState("1");
  const { nickname } = useSelector(state => state.auth);

  const filterRepositoryByOption = (option) => {
    if (option === "1") {
      setRepositories(Array.from([...data.user.repositories.nodes]));
    }
    if (option === "2") {
      getFavorites();
    }
  }

  const getFavorites = async () => {
    const resp = await fetchWithToken(END_POINT_FAVORITES);
    const body = await resp.json();

    setRepositories(body.favorites);
  }

  const filterRepositoryByName = (text) => {
    const filteredRepositories = [...data.user.repositories.nodes].filter((repository) => repository.name.toLocaleLowerCase().includes(text.trim()));
    setRepositories(filteredRepositories)
  }

  const addFavorite = async (selectedRepository) => {
    const resp = await fetchWithToken(END_POINT_FAVORITES, selectedRepository, 'POST');
    const body = await resp.json();

    if (resp.status === 201) {
      Swal.fire("Success", "Favorite repository added successfully")
    } else {
      Swal.fire("Error", body.msg ? body.msg : "Upps.. something goes wrong");
    }
  }

  const { data, loading } = useQuery(gql`${queryRepositories}`, {
    variables: { login: nickname },
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
