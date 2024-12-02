let word = 'Header Project'
let router = {
    404: {
        template: './404.html',
        title: `${word} | 404`
    },
    '/': {
        template: './index.html',
        title: `${word} | Home`
    },
    '/about': {
        template: './about.html',
        title: `${word} | About`
    },
    '/services': {
        template: './services.html',
        title: `${word} | Services`
    },
    '/toturial': {
        template: './toturial.html',
        title: `${word} | Toturial`
    },
    '/blog': {
        template: './blog.html',
        title: `${word} | Blog`
    },
    '/courses': {
        template: './courses.html',
        title: `${word} | Courses`
    },
}

export default router