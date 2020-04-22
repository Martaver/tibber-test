import React from 'react';
import { motion } from 'framer-motion';

type LoadingDotProps = {
    key: string | number | undefined;
};

/**
 * A dot used in the Loading animation that (animated) springs into place.
 */
export const LoadingDot: React.FC<LoadingDotProps> = ({ key }) => (<motion.li {...{ key }} layoutTransition={{
    type: "spring",
    damping: 30,
    stiffness: 200
}} />);
