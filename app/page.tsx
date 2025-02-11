"use client";
import React from "react";
import HomescreenNavbar from "@/app/components/HomescreenNavbar";
import {FaArrowUpLong} from "react-icons/fa6";
import {motion, useMotionValue, useScroll, useSpring, useTransform} from "framer-motion";
import ScrollViewSplits from "@/app/components/ScrollViewSplits";
import ReverseScrollViewSplits from "@/app/components/ReverseScrollViewSplits";

export default function Home(): React.ReactNode {



    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
        scaleX: useMotionValue(1),
        scaleY: useMotionValue(1),
    }

    const [mousePositionState, setMousePositionState] = React.useState<{ x: number, y: number }>({x: 0, y: 0});
    const [firstSectionArrowButton, setFirstSectionArrowButton] = React.useState<boolean>(false);
    const [firstSectionExploreButton, setFirstSectionExploreButton] = React.useState<boolean>(false);
    const [firstSectionGetInTouchButton, setFirstSectionGetInTouchButton] = React.useState<boolean>(false);


    const secondSectionRef: React.RefObject<HTMLElement> = React.useRef<HTMLElement>(null);
    const thirdSectionRef: React.RefObject<HTMLElement> = React.useRef<HTMLElement>(null);
    const fourthSectionRef: React.RefObject<HTMLElement> = React.useRef<HTMLElement>(null);
    const fourthSectionBoxOneRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
    const fourthSectionBoxTwoRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
    const fourthSectionBoxThreeRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
    const fourthSectionBoxFourRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
    const doubleDivScrollSectionRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
    const fifthSectionRef: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);

    //second section scroll progress
    const {scrollYProgress} = useScroll({
        target: secondSectionRef,
        offset: ["start end", "start 0.1"],
    })


    //third section scroll progress
    const {scrollYProgress: ThirdSectionScrollProgress} = useScroll({
        target: thirdSectionRef,
        offset: ["start end", "start 0.2"]
    })


    //fourth section scroll progress
    const {scrollYProgress: FourthSectionScrollProgress} = useScroll({
        target: fourthSectionRef,
        offset: ["start end", "start 0.2"]
    })

    const {scrollYProgress: FourthSectionBoxOneScrollProgress} = useScroll({
        target: fourthSectionBoxOneRef,
        offset: ["start end", "start center"]
    })

    const {scrollYProgress: FourthSectionBoxThreeScrollProgress} = useScroll({
        target: fourthSectionBoxOneRef,
        offset: ["start end", "start start"]
    })

    const {scrollYProgress: FourthSectionBoxFourScrollProgress} = useScroll({
        target: fourthSectionBoxOneRef,
        offset: ["start end", "start start"]
    })


    // Double div scroll section
    const {scrollYProgress: DoubleDivScrollProgress} = useScroll({
        target: doubleDivScrollSectionRef,
        offset: ["start end", "end start"]
    })


    // Fifth section scrol Progress
    const {scrollYProgress: FifthSectionBoxFourScroll} = useScroll({
        target: fifthSectionRef,
        offset: ["start end", "center center"]
    })


    //second section scroll transforms
    const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    const y = useTransform(scrollYProgress, [0, 1], ["-60vh", "0vh"]);
    const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "2rem"]);


    //third section scroll transforms
    const x = useTransform(ThirdSectionScrollProgress, [0, 1], ["5rem", "3rem"]);
    const negX = useTransform(ThirdSectionScrollProgress, [0, 1], ["-5rem", "0rem"]);

    //fourth section scroll transforms
    const fourthX = useTransform(FourthSectionScrollProgress, [0, 1], ["5rem", "0rem"]);
    const negFourthX = useTransform(FourthSectionScrollProgress, [0, 1], ["-5rem", "0rem"]);

    const fourthSectionBoxRotate = useTransform(FourthSectionBoxOneScrollProgress, [0, 1], ["10deg", "0deg"]);
    const fourthSectionBoxX = useTransform(FourthSectionBoxOneScrollProgress, [0, 1], ["-15rem", "0rem"]);

    const fourthSectionBoxTwoRotate = useTransform(FourthSectionBoxOneScrollProgress, [0, 1], ["-10deg", "0deg"]);
    const fourthSectionBoxTwoX = useTransform(FourthSectionBoxOneScrollProgress, [0, 1], ["15rem", "0rem"]);


    const fourthSectionBoxThreeRotate = useTransform(FourthSectionBoxThreeScrollProgress, [0, 1], ["10deg", "0deg"]);
    const fourthSectionBoxThreeX = useTransform(FourthSectionBoxThreeScrollProgress, [0, 1], ["-15rem", "0rem"]);


    const fourthSectionBoxFourRotate = useTransform(FourthSectionBoxFourScrollProgress, [0, 1], ["-10deg", "0deg"]);
    const fourthSectionBoxFourX = useTransform(FourthSectionBoxFourScrollProgress, [0, 1], ["15rem", "0rem"]);


    // Double div scroll section

    const doubleDivX = useTransform(DoubleDivScrollProgress, [0, 1], ["-50%", "0%"]);
    const negDoubleDivX = useTransform(DoubleDivScrollProgress, [0, 1], ["0%", "-50%"]);


    // Fifth section transform
    const fifthSectionX = useTransform(FifthSectionBoxFourScroll, [0, 1], ["0deg", "-10deg"]);
    const fifthSectionRotate = useTransform(FifthSectionBoxFourScroll, [0, 1], ["0rem", "10rem"]);


    React.useEffect(() => {
        window.addEventListener("mousemove", (e: MouseEvent) => {
            mousePosition.x.set(e.clientX);
            mousePosition.y.set(e.clientY);
            setMousePositionState({x: e.clientX, y: e.clientY});
        })

        window.addEventListener("mousedown", () => {
            mousePosition.scaleX.set(4);
            mousePosition.scaleY.set(4);
        })


        window.addEventListener("mouseup", () => {
            mousePosition.scaleX.set(1);
            mousePosition.scaleY.set(1);
        })

        return () => {
            window.removeEventListener("mousemove", (e: MouseEvent) => {
            });

            window.removeEventListener("mousedown", (e: MouseEvent) => {
            })
            window.removeEventListener("mouseup", (e: MouseEvent) => {
            })
        }
    }, [])

    React.useEffect(() => {
        (
            async () => {
                const locomotiveScroll = (await import("locomotive-scroll")).default;
                const LocomotiveScroll = new locomotiveScroll();
            }
        )()
    }, []);
    return (
        <React.Fragment>

            <HomescreenNavbar mousePosition={mousePositionState} hoverState={() => {
                mousePosition.scaleX.set(5);
                mousePosition.scaleY.set(5);
            }} leaveState={() => {
                mousePosition.scaleX.set(1);
                mousePosition.scaleY.set(1);
            }}/>
            <motion.div
                style={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    scaleX: mousePosition.scaleX,
                    scaleY: mousePosition.scaleY,
                }}
                className={`h-[1rem] mix-blend-difference pointer-events-none transition-all duration-300 ease-out fixed z-[100] aspect-square bg-white rounded-full`}>

            </motion.div>

            <main className={`w-screen`}>
                <section className={`h-screen w-screen relative flex justify-center items-center`}>
                    <div

                        className={`text-white font-bold`}>
                        <motion.h1
                            onMouseEnter={() => {
                                mousePosition.scaleX.set(10)
                                mousePosition.scaleY.set(10)
                            }}
                            onMouseLeave={() => {
                                mousePosition.scaleX.set(1)
                                mousePosition.scaleY.set(1)
                            }}
                            data-scroll
                            data-scroll-speed={"0.05"}
                            className={`text-center text-[5rem] leading-[1rem]`}>ROAR IN THE
                        </motion.h1>
                        <motion.h1
                            onMouseEnter={() => {
                                mousePosition.scaleX.set(10)
                                mousePosition.scaleY.set(10)
                            }}
                            onMouseLeave={() => {
                                mousePosition.scaleX.set(1)
                                mousePosition.scaleY.set(1)
                            }}
                            data-scroll
                            data-scroll-speed={"0.07"}
                            className={`text-center text-[5rem]`}>DIGITAL WILDERNESS
                        </motion.h1>

                        <p

                            onMouseEnter={() => {
                                mousePosition.scaleX.set(10)
                                mousePosition.scaleY.set(10)
                            }}
                            onMouseLeave={() => {
                                mousePosition.scaleX.set(1)
                                mousePosition.scaleY.set(1)
                            }}
                            className={`font-light text-[0.8rem] text-center uppercase text-gray-400`}>We are the best
                            in
                            the
                            game, by
                            standards</p>
                        <p

                            onMouseEnter={() => {
                                mousePosition.scaleX.set(10)
                                mousePosition.scaleY.set(10)
                            }}
                            onMouseLeave={() => {
                                mousePosition.scaleX.set(1)
                                mousePosition.scaleY.set(1)
                            }}
                            className={`font-light text-[0.8rem] text-center uppercase text-gray-400`}>Throughout
                            Versatile
                            design,
                            branding and the latest</p>
                        <p

                            onMouseEnter={() => {
                                mousePosition.scaleX.set(10)
                                mousePosition.scaleY.set(10)
                            }}
                            onMouseLeave={() => {
                                mousePosition.scaleX.set(1)
                                mousePosition.scaleY.set(1)
                            }}
                            className={`font-light text-[0.8rem] text-center uppercase text-gray-400`}>Tech development
                            to
                            companies
                        </p>

                        <div
                            onMouseEnter={() => {
                                mousePosition.scaleX.set(5)
                                mousePosition.scaleY.set(5)
                                setFirstSectionArrowButton(true);
                            }}
                            onMouseLeave={() => {
                                mousePosition.scaleX.set(1)
                                mousePosition.scaleY.set(1)
                                setFirstSectionArrowButton(false);
                            }}
                            className={`w-[5rem] relative mx-auto h-[5rem] my-2`}>
                            <motion.button

                                style={{
                                    left: firstSectionArrowButton ? `calc(25% + ${(mousePositionState.x - 700) / 5}px)` : `25%`,
                                    top: firstSectionArrowButton ? `calc(25% + ${(mousePositionState.y - 500) / 5}px)` : `25%`,
                                }}
                                className={`p-3 absolute rounded-full transition-none border-[0.25px] border-white`}>
                                <FaArrowUpLong/>
                            </motion.button>
                        </div>
                    </div>

                    <div className={`flex justify-between items-center w-[85%] mx-auto absolute bottom-[3rem]`}>
                        <button
                            className={`border-[0.25px] border-white p-5 rounded-full text-white w-[10rem]`}>Explore
                        </button>
                        <button className={`border-[0.25px] border-white p-5 rounded-full text-white w-[10rem]`}>Get In
                            Touch
                        </button>
                    </div>
                </section>

                <section
                    ref={secondSectionRef}
                    className={`h-screen w-screen flex justify-center items-center`}>
                    <motion.div
                        style={{
                            scale,
                            y,
                            borderRadius
                        }}
                        className={`w-[85%] transition-all duration-300 ease-out h-[80%] bg-white rounded-xl mx-auto`}>

                    </motion.div>
                </section>


                {/*recente work secton */}
                <section
                    ref={thirdSectionRef}
                    className={`w-screen mt-[8rem] text-white flex justify-center items-center`}>
                    <div className={`h-full w-[85%]`}>
                        <motion.h1
                            style={{x}}
                            className={`text-[8rem] font-bold uppercase leading-[1rem]`}>
                            Recent
                        </motion.h1>
                        <motion.h1
                            style={{x: negX}}
                            className={`text-[8rem] font-bold uppercase`}>
                            works
                        </motion.h1>

                        <div className={`flex justify-between items-center`}>
                            <p className={`font-light text-[1.5rem]`}>
                                In the creative wilderness,
                                <br/>
                                clients find our work truly
                                <br/>
                                wonderful.
                            </p>

                            <button className={`p-5 w-[10rem] border-[0.25px] border-white rounded-full`}>Explore Work
                            </button>
                        </div>

                        {/*this is just a spacer*/}
                        <div className={`h-[10rem] w-full `}/>

                        <ScrollViewSplits/>
                        <div className={`h-[5rem] w-full `}/>
                        <ReverseScrollViewSplits/>
                        <div className={`h-[5rem] w-full `}/>
                        <ScrollViewSplits/>
                    </div>
                </section>

                <section
                    ref={fourthSectionRef}
                    className={`w-screen pb-[5rem] mt-[12rem] text-white flex justify-center items-center`}>
                    <div className={`h-full w-[85%]`}>
                        <motion.h1
                            style={{x: fourthX}}
                            className={`text-[8rem] font-bold uppercase leading-[1rem]`}>
                            who
                        </motion.h1>
                        <motion.h1
                            style={{x: negFourthX}}
                            className={`text-[8rem] font-bold uppercase`}>
                            are we
                        </motion.h1>

                        <div className={`flex justify-between items-center`}>
                            <p className={`font-light text-justify text-[1.5rem]`}>
                                Some students studying at
                                <br/>
                                <span>Chitkara University</span>, Punjab
                                <br/>
                                spanning through our BTech.
                            </p>


                            <button
                                onMouseEnter={() => {
                                    mousePosition.scaleX.set(15);
                                    mousePosition.scaleY.set(8);
                                }}
                                onMouseLeave={() => {
                                    mousePosition.scaleX.set(1);
                                    mousePosition.scaleY.set(1);
                                }}
                                className={`p-5 w-[10rem] border-[0.25px] border-white rounded-full`}>
                                Contact Us
                            </button>
                        </div>

                        <div className={`gap-[1rem] h-[45vh] flex mt-24`}>
                            <motion.div
                                ref={fourthSectionBoxOneRef}
                                style={{rotate: fourthSectionBoxRotate, x: fourthSectionBoxX}}
                                className={`bg-white/10 flex-1 rounded-2xl origin-bottom-left`}></motion.div>
                            <motion.div
                                ref={fourthSectionBoxTwoRef}
                                style={{rotate: fourthSectionBoxTwoRotate, x: fourthSectionBoxTwoX}}
                                className={`bg-white/10 flex-1 rounded-2xl`}></motion.div>
                        </div>

                        <div className={`gap-[1rem] h-[45vh] flex mt-[1rem]`}>
                            <motion.div
                                ref={fourthSectionBoxThreeRef}
                                style={{rotate: fourthSectionBoxThreeRotate, x: fourthSectionBoxThreeX}}
                                className={`bg-white/10 flex-1 rounded-2xl`}></motion.div>
                            <motion.div
                                ref={fourthSectionBoxFourRef}
                                style={{rotate: fourthSectionBoxFourRotate, x: fourthSectionBoxFourX}}
                                className={`bg-white/10 flex-1 rounded-2xl`}></motion.div>
                        </div>
                    </div>
                </section>


                {/*this is the double div scroll section*/}
                <div
                    className={`mt-20`}
                    ref={doubleDivScrollSectionRef}>

                    <motion.div
                        style={{
                            x: doubleDivX
                        }}
                        className={`flex text-white leading-[8rem] text-[10rem] uppercase font-bold items-center gap-[3rem] w-[max-content] p-5`}>
                        <h1>Wild Ideas!</h1>
                        <h1>-</h1>
                        <h1>Wild Ideas!</h1>
                        <h1>-</h1>
                        <h1>Wild Ideas!</h1>
                        <h1>-</h1>
                        <h1>Wild Ideas!</h1>
                    </motion.div>


                    <motion.div
                        style={{
                            x: negDoubleDivX
                        }}
                        className={`flex leading-[3rem] text-[10rem] uppercase font-bold items-center gap-[3rem] w-[max-content] text-white p-5`}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1>Let's Go</h1>
                        <h1>-</h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1>Let's Go</h1>
                        <h1>-</h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1>Let's Go</h1>
                        <h1>-</h1>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h1>Let's Go</h1>
                    </motion.div>

                </div>


                <FifthSection/>
            </main>
        </React.Fragment>
    );
}

const FifthSection = (): React.JSX.Element => {
    return (
        <section className={`w-screen h-screen flex mt-[13rem] justify-center items-center`}>
            <div className={`w-[85%] h-full bg-blue-300/10`}>

            </div>
        </section>
    )
}

