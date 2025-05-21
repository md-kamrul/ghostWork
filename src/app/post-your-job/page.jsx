import React from 'react';

const page = () => {
    return (
        <div className='w-[90%] md:w-full mx-auto'>
            <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl my-10'>Post Task Details</h1>
            <div className='flex flex-col justify-center items-center mb-3'>
                <textarea className="textarea md:w-[40%]" placeholder="Write the details"></textarea>
                <div className='flex flex-col md:flex-row gap-2 w-[85%] md:w-[40%] mx-auto my-5'>
                    <input
                        type="number"
                        className="input validator w-full"
                        required
                        placeholder="Amount (BDT) you are ready to pay"
                        min="1"
                        max="10"
                        title="Amount you are ready to pay"
                    />
                    <select defaultValue="Define your task" className="select select-foreground w-full md:w-[40%]">
                        <option disabled={true}>Choose the task</option>
                        <option>Project</option>
                        <option>Assignment</option>
                    </select>
                </div>
            </div>
            <div className='w-[85%] md:w-[70%] mx-auto mb-10 text-justify'>
                <p>First, you will have to deposit the money as security. This money will be deposited with the authorities of GhostMate. Only after you have received the work and confirmed it will the person who completed your work receive the money.</p>
            </div>
            <div className='flex items-center justify-center mb-10'>
                <a href="#">
                    <button className="btn bg-foreground text-black">Proceed</button>
                </a>
            </div>
        </div>
    );
};

export default page;