import React from 'react';

const CallToAction = () => {
    return (
        <section className='w-[90%] lg:w-[80%] mx-auto bg-foreground text-black text-center my-10 p-10 flex flex-col md:flex-row justify-between'>
            <div className='w-[50%] mx-auto flex flex-col md:flex-row gap-10 md:gap-20 font-bold items-center justify-center'>
                <div>_create_your_new_account_</div>
                <div>_log_in_your_account_</div>
            </div>
        </section>
    );
};

export default CallToAction;