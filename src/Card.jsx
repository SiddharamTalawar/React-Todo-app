import proptypes from 'prop-types'
function Card(props){

    return (
        <div className="card">
            <img className="card-img" src={props.img} alt="profile-pic" />
            <h2>{props.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}



Card.proptypes = {
    name: proptypes.string,
    img : proptypes.string
}
Card.defaultProps = {
    name: "John Doe",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
}
export default Card