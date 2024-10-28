import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Display from './Display.jsx';
const RotatingCircle = () => {
    return (
        <>
            <motion.div
                className="box"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 100, 360, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 1.72,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8],
                    repeat: 1,
                    repeatDelay: 0.1
                }}
            >
                <Link to={'Display.jsx'}>Generate</Link>
            </motion.div>

        </>
    );
};

export default RotatingCircle;
