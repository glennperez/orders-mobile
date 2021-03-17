import { useEffect, useState} from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { loading, data }
}

export default useFetch