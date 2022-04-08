

import "./styles.scss";

export function Keyboard() {
    const letters = "abcdefghijqlmnopqrstuvxywz";

    return (
        <ul>
            {
                letters.split("").map((letter, value) => (
                    <li key={value}>
                        <button value={letter}>{letter}</button>
                    </li>
                ))
            }
        </ul>
    )
}