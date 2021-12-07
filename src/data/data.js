import React, {useState} from 'react';

function Data() {
    const [leagues,setLeagues]=useState([]);
    const [sports,setSports]=useState([]);

    async function leaguesData() {
        let result = await fetch('http://localhost:3000/list')
        result = await result.json()
        console.log('Please wait while the response is loading...')
        setTimeout(() => {
            console.log(result)
        }, 2000)
        setLeagues(result);
    }

    async function sportsData() {
        let result = await fetch('http://localhost:3000/list')
        result = await result.json()
        console.log('Please wait while the response is loading...')
        setTimeout(() => {
            console.log(result)
        }, 2000)
        setSports(result);
    }
    return (
        <div>
            <button style={{ marginRight: '10px' }} onClick={leaguesData}>Leagues</button>
            <button onClick={sportsData}>Sports</button><br /><br />
            <table>
                <thead>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Data;
