function Student(props) {
    const random = Math.random(); // Capital "M" in Math

    return (


        <div className="student">
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Grade: {props.grade}</p>
            <p>{random}</p>
        </div>

    );
}

export default Student;
 