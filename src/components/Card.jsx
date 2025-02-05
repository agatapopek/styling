export default function Card({title, content}){
    const cardStyle = {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '8px',
    }

    return(
        <div style={cardStyle}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
};
