const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        byId: (id: number): string => urls.users.base + `/${id}`
    },
    posts: {
        base: '/posts',
        
    },
    comments: {
        base: '/comments',
        byPostId: (id: number): string => `/posts/${id}` + urls.comments.base
    }
}

export {
    urls,
    baseUrl
}
