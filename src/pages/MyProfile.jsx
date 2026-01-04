import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MyProfile = () => {
    const { user, forUpdateProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [email, setEmail] = useState(user?.email || "");

    useEffect(() => {
        if (user) {
            setName(user.displayName || "");
            setPhoto(user.photoURL || "");
            setEmail(user.email || "");
        }
    }, [user]);

    const handleUpdate = (e) => {
        e.preventDefault();
        forUpdateProfile(name, photo).then(() => { toast.success('Profile Update successful!'); })
            .catch(err => toast.error(err));
    };

    return (
        <div className="py-20 px-3">
            <title>MovieMaster Pro - My Profile</title>
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Profile</h2>

                <img
                    src={photo || "https://cdn-icons-png.flaticon.com/512/266/266033.png"}
                    alt="User"
                    className="w-60 h-60 mx-auto rounded-full border mb-3"
                />

                <p className="text-lg font-medium text-gray-700">Name: {name}</p>
                <p className="text-gray-600 mb-4">Email: {email}</p>

                <form onSubmit={handleUpdate} className="space-y-3">
                    <input
                        type="text"
                        placeholder="Update name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                        type="text"
                        placeholder="Update photo URL"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#f97316] hover:bg-[#bb4f02] text-white font-medium py-2 rounded transition"
                    >
                        Update Profile
                    </button>
                </form>

            </div>
        </div>

    );
};

export default MyProfile;