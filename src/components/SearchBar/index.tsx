import { useState } from 'react';
import './styles.css';

type Props = {
    onSearch: Function;
}


export default function SearchBar({ onSearch }: Props) {

    const [text, setText] = useState("");

    function handleSubmit(event: any) {
        event.preventDefault();
        onSearch(text);
    }

    function handleChange(event: any) {
        setText(event.target.value);
    }

    function handleResetClick(event: any) {
        setText("");
        onSearch(text);
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
            <button type="submit">🔎︎</button>
            <input value={text} onChange={handleChange} type="text" placeholder="Nome do produto" />
            <button onClick={handleResetClick}>&#x2715;</button>
        </form>);
}