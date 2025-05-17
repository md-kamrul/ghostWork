import React from 'react';

const Footer = () => {
    return (
        <div className='border-t border-t-foreground left-0 w-full'>
            <footer className="footer sm:footer-horizontal footer-center pt-6 pb-6">
                <aside>
                    <div className='flex items-center justify-center gap-5'>
                        <div>
                            <a href="#">
                                _about_us_
                            </a>
                            </div>
                        <div>
                            <a href="#">
                                _our_policy_
                            </a>
                            </div>
                        <div>
                            <a href="#">
                                _return_policy_
                            </a>
                            </div>
                    </div>
                    <p>_copyright_©_{new Date().getFullYear()}_all_right_reserved_by_GhostMate</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;