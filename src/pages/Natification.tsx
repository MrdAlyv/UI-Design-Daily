// import { useNavigate } from "react-router-dom"
import Nav from "../components/Nav"
import Button from "../components/Button"
import { Switch } from "antd"


const Natification = () => {
    return (
        <div>
            <Nav />
            <div className="flex">
                <Button />
                <div className="my-12 mx-60">
                    <h1 className="text-3xl font-bold ">Natification</h1>
                    <p className="text-2xl font-semibold my-11">Email notifications</p>
                    <p className="my-4 text-lg font-bold">Weekly newsletter</p>

                    <div className="flex gap-x-52">
                        <div>
                            <p>A small text about what the newsletters might contain.</p>
                        </div>
                        <div>
                            <Switch className="bg-gray" />
                        </div>
                    </div>
                    <h1 className="my-8 text-lg font-bold ">Account summary</h1>
                    <div className="flex gap-x-52">
                        <div>
                            <p>A small text about what the newsletters might contain.</p>
                        </div>
                        <div>
                            <Switch className="bg-gray" />
                        </div>
                    </div>
                    <div className="flex gap-20 my-20 ">
                        <button className="text-white rounded-xl w-44 h-14 bg-dark-blue">Save Changes</button>
                        <button className="border-2 rounded-xl w-44 h-14 ">Cancel</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Natification
