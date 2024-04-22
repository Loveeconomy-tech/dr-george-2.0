import { FC, ReactNode, useRef, useEffect } from 'react'
import { Box} from '@chakra-ui/react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';

interface IProp {
    from?: string,
    children?: ReactNode;
}

const MotionBox = motion(Box)

const setHidden = (from, len) => {
    if(!from) from = 'bottom'
    let opacity = 0
    let x = 0, y= 0
    switch (from) {
        case 'top':
            y = -len
        case 'bottom':
            y = len
        case 'left':
            x = -len
        case 'right':
            x = len
        default:
            break;
    }
    return {opacity, x, y}
}

const setVisible = (from) => {
    if(!from) from = 'bottom'
    let opacity = 1
    if(from === 'top' || from === 'bottom') return {opacity, y: 0}
    return {opacity, x: 0}
}

const Reveal: FC<IProp> = ({
    from,
    children
}) => {
    
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true}) 
    const mainControls = useAnimation();
    const isMobile = useMediaQuery({ maxWidth: 750 });


    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])
    
    return (
        <Box ref={ref} width={"fit-content"} position={"relative"}>
            <MotionBox 
            variants={{
                hidden: setHidden(from, isMobile? 40: 100),
                visible: setVisible(from)
            }}
            initial={"hidden"}
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.3}}
            >
                {children}
            </MotionBox>
        </Box>
    )
}

export default Reveal
