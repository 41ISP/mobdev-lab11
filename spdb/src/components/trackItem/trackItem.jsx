import { useNavigate } from "react-router-dom"

const TrackItem = ({type,result}) => {
    const {title,artist_names,id,header_image_thumbnail_url} = result
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/song/${id}`)
    }
    return (
        <div onClick={(handleNavigate)}>
            <div>
            <img src={header_image_thumbnail_url} alt={title}/>
            </div>
            <div>
                <div>{title}</div>
                <div>{artist_names}</div>
                <div>
                    <span>{type}</span>
                </div>
            </div>
        </div>
    )
}
export default TrackItem