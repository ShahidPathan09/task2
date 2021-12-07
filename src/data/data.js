import React, { useState } from 'react';

function Data() {
    const [leagues, setLeagues] = useState([]);
    const [leagueToggle, setLeagueToggle] = useState(false);

    async function leaguesData() {
        let result = await fetch('http://localhost:3004/db1')
        result = await result.json()
        setLeagues(result)
        setLeagueToggle(!leagueToggle)
    }

    return (
        <div>
            <button style={{ marginRight: '10px' }} onClick={leaguesData}>Toggle switch</button>
            <table>
                <thead>
                    <tr>
                        <td>Username</td>
                        <td>Number</td>
                        <td>Confirm Number</td>
                    </tr>
                </thead>
                {
                    leagueToggle ? <tbody>
                        {
                            leagues.map((item, i) => {
                                return <tr key={i}>
                                    <td>{item.username}</td>
                                    <td>{item.number}</td>
                                    <td>{item.confirmNumber}</td>
                                </tr>
                            })
                        }
                    </tbody> : null
                }
            </table>
        </div>
    )
}

export default Data;
