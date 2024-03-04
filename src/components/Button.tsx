import { useNavigate } from "react-router-dom"
const Button = () => {
    const navigate = useNavigate()
    function handleProfilePage(e: any) {
        e.preventDefault();
        console.log("Button clicked");
        //navigating to another page using
        navigate("/")
    };
    function handleAccountPage(e: any) {
        e.preventDefault();
        navigate('/account')
    }
    function handleNatificationPage(e: any) {
        e.preventDefault();
        navigate('/natification')
    }


    return (
        <div>
            <div className="flex flex-row">
                <div className="mx-10 ">
                    <h1 className="text-3xl ">Settings</h1>
                    <div className
                        ="flex flex-col items-start gap-6 my-10">
                        <button onClick={handleProfilePage}>Public profile</button>
                        <button onClick={handleAccountPage}>Account</button>
                        <button onClick={handleNatificationPage} >Notifications</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Button
