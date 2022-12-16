import {useCallback, useState} from 'react'
const useToggle = (initialState=false) => {
    const [state, setstate] = useState(initialState)
    const toggleValue = useCallback(() => {
        setstate(state=>!state)
    },[])
    return [state,toggleValue]
}
export default useToggle