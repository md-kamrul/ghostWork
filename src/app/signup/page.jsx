import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl mt-10'>SignUp Page</h1>
            <div className="card border border-foreground rounded-lg w-full max-w-sm shrink-0 shadow-2xl my-20 mx-auto">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        <label className="label">Date of Birth</label>
                        <input type="date" className="input" placeholder="Date of Birth" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button className="border border-foreground rounded-lg py-2 mt-4">Signup</button>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default page;