import { useEffect, useRef } from "react"

const useOnClickOutside = ( handler) => {
   const ref = useRef(null)
   useEffect(() => {
    const eventHandler = (event) => {
        if(ref.current && !ref.current.contains(event.target)) {
            handler()
        }else{
            return
        }
    }
     document.addEventListener('mousedown', eventHandler)
     return () => {
       document.removeEventListener('mousedown', eventHandler)
     }
   }, [])
   return [ref]
}
export default useOnClickOutside
