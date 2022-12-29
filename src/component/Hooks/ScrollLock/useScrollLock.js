import React, { useEffect, useState } from 'react'

const useScrollLock = () => {
    const bodyStyle = document.body.style

    const [isLocked, setIsLocked] = useState(bodyStyle.overflow = "hidden");
    
    useEffect(()=>{
        bodyStyle.overflow = isLocked ? "hidden" : "auto"
    }, [isLocked, bodyStyle])

    const toggle = () => setIsLocked(!isLocked)

  return [isLocked, toggle]
}

export default useScrollLock