import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => {
        setToDo((toDo) => (toDo = e.target.value));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") return;
        setToDo("");
        setToDos((toDos) => [toDo, ...toDos]);
    };
    useEffect(() => {
        console.log(toDos);
    }, [toDos]);

    return (
        <div>
            <h1>TO DO List ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Write To Do!"
                    value={toDo}
                    onChange={onChange}
                />
                <button>ADD</button>
            </form>
            <hr />
            {toDos.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
    );
}

export default App;
