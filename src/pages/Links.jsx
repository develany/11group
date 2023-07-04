import { Link } from "react-router-dom"

const Links = ({ links }) => {
    return (
        <div>
            {links ? (
                <div>
                    <ul>
                        {links.map((links) => 
                        (<li key={links.createdAt} ><Link to={`${links.url}`} target="_blank"  >{links.url}</Link></li>)
                        )}
                    </ul>

                </div>
            ) : (
                <>sem usuario</>
            )}
            <hr />
        </div>
    )
}

export default Links