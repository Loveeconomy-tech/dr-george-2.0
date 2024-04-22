
export const getLanguage = () => {
    if (typeof window !== 'undefined') {
        let lang = localStorage.getItem('site_language')
        if (!lang) lang = 'en'

        return lang
    }
    return "en"
}