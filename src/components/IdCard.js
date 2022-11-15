function IdCard({lastName, firstName, gender, height, birth, picture}) {
    height = +JSON.stringify(height)/100;
    birth = new Date(birth).toDateString();
    return (
        <div className="IdCard">
        <div className="image">
            <img src={picture} alt="profile" />
            
        </div>
        <div className="personData">
            <p>First name: <span>{firstName}</span></p>
            <p>Last name: <span>{lastName}</span></p>
            <p>Gender: <span>{gender}</span></p>
            <p>Height: <span>{height}m</span></p>
            <p>Birth: <span>{birth}</span></p>
        </div>
        </div>
    );
}

export default IdCard;