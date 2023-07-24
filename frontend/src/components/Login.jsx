import React,{useState} from 'react'

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-6 bg-white rounded-lg drop-shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Log In</h2>
            <form>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
                </label>
                <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                placeholder="example@example.com"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
                </label>
                <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
                />
            </div>
            <div className="mb-4 pl-1">
            <input
                type="checkbox"
                id="showPasswordToggle"
                checked={showPassword}
                onChange={toggleShowPassword}
                className="h-4 w-4"
            />
            <label htmlFor="showPasswordToggle" className="ml-1">
                Show Password
            </label>
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-600 mb-2"
            >
                Log In
            </button>
            <button
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-600"
            >
                Create An Account
            </button>
            </form>
            <p className="mt-6 text-center text-gray-600">Or Log In with:</p>
            <div className="flex justify-center mt-2">
            <button className="mx-2 p-2 rounded-full text-white hover:bg-neutral-300">
                <img src='https://img.icons8.com/?size=512&id=17949&format=png' className="h-10 w-10"></img>
            </button>
            <button className="mx-2 p-2 rounded-full text-white hover:bg-neutral-300">
            <img src='https://img.icons8.com/?size=2x&id=3tC9EQumUAuq&format=png' className="h-10 w-10"></img>
            </button>
            </div>
        </div>
        </div>
    );
}

export default Login