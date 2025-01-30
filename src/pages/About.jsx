import React from 'react';
import CountUp from 'react-countup';

import ReactPlayer from 'react-player'

const About = () => {
    return (
        <div className="min-h-[80vh] bg-neutral-400  flex justify-center items-center">
            <span className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About
                <CountUp start={0} end={1000} delay={0}>
                    {({ countUpRef }) => (
                        <div>
                            <span ref={countUpRef} />
                        </div>
                    )}
                </CountUp>

<ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls={true} playing={true} muted={true}/>

            </span>


        </div>
    );
};

export default About;