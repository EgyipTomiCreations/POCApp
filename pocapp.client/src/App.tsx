import { useEffect, useState } from 'react';
import './App.css';

interface Rat {
    name: string;
    type: number;
}

function App() {
    const [rats, setRats] = useState<Rat[]>();

    const ratTypeMap: { [key: number]: string } = {
        0: 'Lab',
        1: 'Rex',
        2: 'Hairless'
    };

    useEffect(() => {
        populateRatData();
    }, []);
    const contents = rats === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {rats.map(rat =>
                    <tr key={rat.name}>
                        <td>{rat.name}</td>
                        <td>{ratTypeMap[rat.type]}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Rats</h1>
            {contents}
        </div>
    );

    async function populateRatData() {
        const response = await fetch('rat');
        const data = await response.json();
        setRats(data);
    }
}

export default App;