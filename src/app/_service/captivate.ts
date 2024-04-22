import axios from "axios"

export const getCaptivateToken = async () => {
    let token = localStorage.getItem('captivate_token')
    const username = process.env.NEXT_PUBLIC_USERNAME
    const captivateToken = process.env.NEXT_PUBLIC_API_TOKEN

    if (!token) {
        const res = await axios.post('https://api.captivate.fm/authenticate/token', {
            username,
            token: captivateToken
        })

        if (res.data.user) {
            localStorage.setItem('captivate_token', res.data.user.token)
        }
    }
}

export const getEpisodes = async () => {
    let token = localStorage.getItem('captivate_token')
    const showId = process.env.NEXT_PUBLIC_SHOW_ID

    if (token) {
        const res = await axios.get(`https://api.captivate.fm/shows/${showId}/episodes`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return await res.data
    }
}