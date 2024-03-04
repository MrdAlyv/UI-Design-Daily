import Nav from "../components/Nav"
import Button from "../components/Button"
import profilePhoto from '../assets/ProfilePhoto.png'
import Form from "../components/Form"
const Profile = () => {

    return (
        <div>
            <Nav />
            <div className="flex flex-row">
                <Button />
                <div className="my-12 mx-60 ">
                    <h1 className="text-3xl ">Public Profile</h1>
                    <div className="flex flex-row items-center justify-center gap-20">
                        <img src={profilePhoto} alt="pp" />
                        <div className="flex flex-col gap-10">
                            <button className="w-48 h-12 text-white border border-black bg-dark-blue rounded-2xl">Change Picture</button>
                            <button className="w-48 h-12 border-2 rounded-2xl">Delete Picture</button>
                        </div>
                    </div>
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Profile
