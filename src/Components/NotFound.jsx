import { Link, NavLink } from "react-router-dom"
import { Helmet } from "react-helmet"


const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>NOT EXIST</title>
                <meta name="description" content="Not Found Frontend Developer Portfolio" />
            </Helmet>

            <div className="min-h-screen flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-bold">404</h1>
                <p className="mt-4 text-lg">Page not found</p>
                <NavLink
                    className='bg-red-500 py-4! px-6! text-amber-50 rounded-3xl'
                    to="/">Back To Home</NavLink>
            </div>
        </>
    )
}

export default NotFound




