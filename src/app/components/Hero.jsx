import React from 'react';

const Hero = () => {
    return (
        <section className='w-[90%] lg:w-[80%] mx-auto'>
            <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl mt-10 mb-5'>World's #1 Anonymous Micro-Site for Students</h1>
            <div className='mb-5 flex flex-col md:flex-row justify-center items-center gap-5 w-full'>
                <div className='border rounded-lg border-foreground p-7 md:max-w-[50%]'>
                    <div className='w-20 mx-auto mb-5'>
                        <img src="assignment.png" alt="assignment logo" />
                    </div>
                    <div>
                        <h1 className='text-justify'>Post your Assginment / Project / Presentation with Details. Write down your budget with the Deadline. Pay the security money. Done!!! Your GhostMate will start doing the task.</h1>
                    </div>
                </div>
                <div className='border rounded-lg border-foreground p-7 md:max-w-[50%]'>
                    <div className='w-20 mx-auto mb-5'>
                        <img src="money.png" alt="money logo" />
                    </div>
                    <div>
                        <h1 className='text-justify'>Verify yourself. Selete a(n) Assginment / Project / Presentation. Complete the task. Submit your task. After the confirmation from the Client, you will get your payment.</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;