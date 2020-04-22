import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shuffle } from 'lodash';
import { LoadingDots } from './LoadingDots';

type LoadingProps = {
    isLoading: boolean;
};

export const Loading: React.FC<LoadingProps> = ({ isLoading }) => {

    const [keys, setKeys] = React.useState([1, 2, 3]);

    React.useEffect(() => {
        setTimeout(() => setKeys(shuffle(keys)), 500);
    }, [keys]);

    return (<AnimatePresence>
        {isLoading && (<LoadingDots initial={{ opacity: 1 }} exit={{ position: 'fixed', opacity: 0, bottom: 0 }}>
            {keys.map(i => (<motion.li key={i} layoutTransition={{
                type: "spring",
                damping: 30,
                stiffness: 200
            }} />))}
        </LoadingDots>)}
    </AnimatePresence>);
};
