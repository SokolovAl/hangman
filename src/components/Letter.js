import "../Letter.css";

const Letter = ({letter, status}) => {

    return <span key={letter}>{letter}{status}</span>;
};

export default Letter;
