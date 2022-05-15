import React from "react";

const Table = ({ columns, rows }) => {
    return (
        <table className="table">
            <tr>
                <th scope="col">#</th>
                {
                    columns.map((col, index) => {
                        return <th scope="col" key={index}>{col}</th>
                    })
                }
            </tr>
            <tbody>
                {
                    rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                {row.map((item, index) => {
                                   return <td key={index}>{item}</td>
                                })}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;