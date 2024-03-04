import Nav from "../components/Nav"
import Button from "../components/Button"

// import { useNavigate } from 'react-router-dom';

const Account = () => {
    // const navigate = useNavigate();

    // const handleProfilePage = () => {
    //     navigate("/")
    // }
    // const handleNatificationPage = () => {
    //     navigate("/notification")
    // }
    return (
        <div>
            <Nav />
            <div className="flex">
                <Button />
                <div className="my-12 mx-60">
                    <h1 className="my-10 text-3xl font-bold"> Account settings</h1>
                    <h2 className="my-8 text-2xl font-semibold ">Email address</h2>
                    <span className="text-lg ">Your email address is <b>emailis@private.com</b></span>
                    <a href="#" className="mx-24 underline text-blue">Change</a>
                    <div className="my-12">
                        <span className="text-2xl font-semibold">Password</span>

                        <a href="#" className="underline mx-96 text-blue">Hide</a>
                    </div>
                    <div className="flex gap-24">
                        <input type="text" placeholder="*********" className="h-16 px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name="" id="" />
                        <input type="text" placeholder="*********" className="h-16 px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none hpx-3 focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="my-12">  <span >Can't remember your current password? <a className="mx-20 underline text-blue" href="#">Reset your password</a></span></div>
                    <button className="text-white rounded-xl w-44 h-14 bg-dark-blue">Save password</button>
                </div>
            </div>

        </div>
    )
}

export default Account
