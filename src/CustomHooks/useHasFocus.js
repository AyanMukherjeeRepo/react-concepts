import { useEffect, useRef, useState } from "react";
const useHasFocus = () => {
    const [hasFocus, setHasFocus] = useState(false);
    const ref = useRef(null);
    const handleFocus = () => {
        console.log('focus on')
        setHasFocus(true)
    };
    const handleBlur = () => {
        console.log('focus is off')
        setHasFocus(false)
    };
    useEffect(() => {
        const node = ref.current;
        if (node) {
        node.addEventListener("focus", handleFocus);
        node.addEventListener("blur", handleBlur);
        return () => {
            node.removeEventListener("focus", handleFocus);
            node.removeEventListener("blur", handleBlur);
        };
        }
    }, []);
    
    return [hasFocus, ref];
}
export default useHasFocus;