import { useEffect, useState } from "react";
import "./Search.css"
import TrackItem from "../../components/trackItem/trackItem";
const Search = () => {
    const [tracks, setTracks] = useState(undefined)
    const handleSubmit = async (e) => {
        e.preventDefault()
        // setError(undefined)
        try {
            const parameters = new URLSearchParams({
                q: e.target.query.value
            })
            const res = await fetch(`https://kitek.ktkv.dev/feedback/api/genius/search?${parameters.toString()}`)
            const json = await res.json()
            setTracks(json)
        } catch {
            console.error(err)
        }

    }
    return (
        <div className="search">

            <form onSubmit={handleSubmit} className="search-container">
                <input type="text" name="query" />
                <button className="search-button">Search</button>
            </form>
            <div className="song-feed">
                {tracks && tracks.response.hits.map((tracks) => <TrackItem {...tracks} />)}
            </div>
        </div>
    )

}
export default Search