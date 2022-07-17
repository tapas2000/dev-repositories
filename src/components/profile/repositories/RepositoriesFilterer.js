import { useState } from "react";

export const RepositoriesFilterer = ({ optionSelected, setOptionSelected, filterRepositoryByOption, filterRepositoryByName }) => {

    const [searchText, setSearchText] = useState("");

    const handleSelect = (event) => {
        const { value } = event.target;

        setOptionSelected(value);
        filterRepositoryByOption(value);
    }

    const handleInputChange = ({ target }) => {
        setSearchText(target.value);
        filterRepositoryByName(target.value);
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="nameId">Search by name</label>
                <input
                    id="nameId"
                    type="text"
                    className="form-control"
                    placeholder="Searched by name"
                    name="name"
                    value={searchText}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="optionId">Search by option</label>
                <select
                    aria-label="Default select example"
                    className="form-select"
                    onChange={handleSelect}
                    value={optionSelected}
                >
                    <option value="1">All</option>
                    <option value="2">Favorites</option>
                </select>
            </div>
        </>
    )
}
