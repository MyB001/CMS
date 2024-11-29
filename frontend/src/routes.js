import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound/NotFound"
import NewUser from "./Pages/NewUser/NewUser"
import UserList from "./Pages/Users/UserList"
import Products from "./Pages/Products/Products"
import NewProduct from "./Pages/NewProduct/NewProduct"
import Comments from "./Pages/Comments/Comments"
import Orders from "./Pages/Orders/Orders"

let routes = [
    {path: '/', element: <Home />},
    {path: '/newUser', element: <NewUser />},
    {path: '/userList', element: <UserList />},
    {path: '/products', element: <Products />},
    {path: '/newProduct', element: <NewProduct />},
    {path: '/orders', element: <Orders />},
    {path: '/comments', element: <Comments />},
    {path: '/notFound', element: <NotFound />},
]

export default routes