import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ExpendableSidebarProps {
    children: ReactNode;
    isSidebarOpen: boolean;
    isMobile: boolean;
}

export const ExpendableSidebar = ({ children, isSidebarOpen, isMobile }: ExpendableSidebarProps) => {
    return (
        <motion.div
            className={`h-full z-20 transition-all duration-300 ease-in-out flex-shrink-0 w-64 ${
                isMobile ? 'absolute' : 'relative'
            }`}
            initial={isMobile ? { marginLeft: -220, width: 0 } : { marginLeft: 0, width: 256 }}
            animate={{
                width: 220,
                marginLeft: isSidebarOpen ? 0 : -220,
            }}
        >
            {children}
        </motion.div>
    );
};
