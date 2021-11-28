import {useState, FC} from 'react'

export const Counter: FC<any> = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>{ `counter: ${counter}` }</h1>
            <button
                onClick= { () => {setCounter(counter+1)} }
                > Click to Increase Counter
            </button>
        </div>
    )
};

