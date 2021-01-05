import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'
import emailCompose from './apps/email/cmps/email-compose.cmp.js'
import bookApp from './apps/books/pages/book-app.cmp.js'
import bookDetails from './apps/books/pages/book-details.cmp.js'
import bookAdd from './apps/books/pages/add-book.cmp.js'
import emailList from './apps/email/cmps/email-list.cmp.js'

const myRoutes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/email/compose/:noteId',
        component: emailApp
    },
    {
        path: '/book',
        component: bookApp,
    },
    {
        path: '/book/add',
        component: bookAdd,
    },

    {
        path: '/book/:bookId',
        component: bookDetails
    },

    {
        path: '/email/:mailsCategory',
        component: emailApp
    },
    {
        path: '/email',
        component: emailApp,
        children: [{
                path: '/email/:mailsCategory',
                component: emailList
            },
            {
                path: '/email/:mailsCategory/:mailId',
                component: emailDetails
            }
        ]
    },

    {
        path: '/keep',
        component: keepApp
    },


]


export const myRouter = new VueRouter({ routes: myRoutes })