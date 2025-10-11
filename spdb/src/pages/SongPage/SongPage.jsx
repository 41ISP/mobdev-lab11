import { useEffect } from "react"
import { useParams } from "react-router-dom"

const SongPage = () => {
    const { id } = useParams()
    useEffect(() => {
        const handleSubmit = async (e) => {
            e.preventDefault()
            // setError(undefined)
            try {
                const parameters = new URLSearchParams({
                    id: e.target.query.value
                })
                const res = await fetch(`https://kitek.ktkv.dev/feedback/api/genius/songs?${parameters.toString()}`)
                const json = await res.json()
                setTracks(json)
            } catch (err) {
                console.error(err)
            }
        }
        handleSubmit()
    }, [])
    return (<div className="song-page">
        
    </div>)

}
export default SongPage