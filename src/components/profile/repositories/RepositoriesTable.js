import React from 'react'

export const RepositoriesTable = ({ addFavorite, optionSelected, repositories }) => {
    return (
        <table className="table table-striped mt-2">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Type</th>
                    <th scope="col">Url</th>
                    {
                        optionSelected
                        &&
                        <th scope="col">Favorite</th>
                    }
                </tr>
            </thead>
            <tbody>
                {
                    repositories.map((repository, i) => {
                        return (
                            <tr key={`${i}${repository.name}`}>
                                <td>{repository.name}</td>
                                <td>{repository.description}</td>
                                <td>{repository.createdAt}</td>
                                <td>{repository.isPrivate ? "Private" : "Public"}</td>
                                <td><a href={repository.url} className="nav-link">Link</a></td>
                                {
                                    optionSelected
                                    &&
                                    <th scope="col">
                                        <button
                                            className='btn btn-outline-primary'
                                            onClick={() => addFavorite(repository)}
                                        >
                                            Add to favorites
                                        </button>
                                    </th>
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
