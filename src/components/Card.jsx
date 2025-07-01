function Card(){

    return(
        <div className="card">
            <img src="https://picsum.photos/200/300" alt="Card Image" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">Card Title</h2>
                <p className="card-description">This is a description of the card. It contains some brief information about the content.</p>
                <button className="card-button">Click Me</button>
            </div>
        </div>
    );
}

export default Card;