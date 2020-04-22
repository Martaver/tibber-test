import React from 'react';

import {motion} from 'framer-motion';

type LoadingDotProps = {
  key: undefined | number | string;
};

/**
 * A dot used in the Loading animation that (animated) springs into place.
 */
export const LoadingDot: React.FC<LoadingDotProps> = ({key}) => (
  <motion.li
    {...{key}}
    layoutTransition={{
      type: 'spring',
      damping: 30,
      stiffness: 200,
    }}
  />
);
