export default function IndividualFeature(props) {
    return(
        <div>
            <h6 className="feat">{props.title}</h6>
            <p  className="feat">{props.parag}</p>
        </div>
    );
}