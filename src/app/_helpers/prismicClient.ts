import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'

export const createClient = (config = {}) => {
    const client = prismic.createClient('lesystems', {
        fetchOptions:
            process.env.NODE_ENV === 'production'
                ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
                : { next: { revalidate: 5 } },
        ...config,
    });

    prismicNext.enableAutoPreviews({ client })

    return client
}