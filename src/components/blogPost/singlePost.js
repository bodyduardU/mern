export default function SinglePost(props) {
    return (
        <div>

            <li className="sPost">
                <a className="blogBody" href={props.bodyLink}>
                    <div className="header">
                        <div className="date">
                            <div className="month">
                                {props.month}
                            </div>
                            <div className="day">
                                {props.day}
                            </div>
                        </div>
                        <h5 className="title">
                            {props.title}
                        </h5>
                    </div>
                    <p className="teaser">
                        {props.teaser}
                        <span className="more"></span>
                    </p>
                </a>
                <div className="attrs">
                    <a href={props.link1}>{props.linkText1}</a>
                    <p className="comma">{props.comma}</p>
                    <a href={props.link2}>{props.linkText2}</a>
                    <ul className="list-inline tags">
                        <li>
                            <a className="tag-link" href={props.tagLink1}>
                                {props.tagLinkText1}
                            </a>
                        </li>
                        <li>
                            <a className="tag-link" href={props.tagLink2}>
                                {props.tagLinkText2}
                            </a>
                        </li>
                        <li>
                            <a className="tag-link" href={props.tagLink3}>
                                {props.tagLinkText3}
                            </a>
                        </li>
                        <li>
                            <a className="tag-link" href={props.tagLink4}>
                                {props.tagLinkText4}
                            </a>
                        </li>
                        <li>
                            <a className="tag-link" href={props.tagLink5}>
                                {props.tagLinkText5}
                            </a>
                        </li>
                    </ul>
                </div>
            </li>

        </div>
    );
}