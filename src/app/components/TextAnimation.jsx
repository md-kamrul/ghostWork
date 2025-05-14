"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(ScrambleTextPlugin, TextPlugin, useGSAP);

const TextAnimation = () => {

    const h1Refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useGSAP(() => {
        h1Refs.forEach(ref => {
            const originalText = ref.current.textContent;
            gsap.to(ref.current, {
                duration: 1,
                scrambleText: {
                    text: originalText,
                    chars: "afsafiuvskfsjaiuwer",
                    revealDelay: 0.5,
                    speed: 0.1,
                    newClass: "myClass"
                }
            });
        });
    }, []);

    return (
        <div className="pt-14 pb-14 flex flex-col items-center gap-20">
            <div className="font-bold text-xl md:text-3xl lg:text-5xl text-start pl-5 flex flex-row gap-20 items-center">
                <div>
                    <div ref={h1Refs[0]}>_post_your_assignment_</div>
                    <div ref={h1Refs[1]}>_secure_your_marks_</div>
                </div>
                <div className="">
                    <img className="w-40" src="assignment.png" alt="assignment icon" />
                </div>
            </div>
            <div className="font-bold text-xl md:text-3xl lg:text-5xl text-start pl-5 flex flex-row gap-20 items-center mb-16">
                <div className="">
                    <img className="w-40" src="money.png" alt="money icon" />
                </div>
                <div>
                    <div ref={h1Refs[2]}>_complete_assignments_</div>
                    <div ref={h1Refs[3]}>_earn_money_</div>
                </div>
            </div>
        </div>
    );
};

export default TextAnimation;