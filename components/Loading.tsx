import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { shuffle } from 'lodash';
import { LoadingDots } from './LoadingDots';
import { LoadingDot } from './LoadingDot';

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
            {keys.map(key => (<LoadingDot {...{ key }} />))}
        </LoadingDots>)}
    </AnimatePresence>);
};
