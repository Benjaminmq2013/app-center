import React from 'react'
import Image from 'next/image'

const Icon = () => {
  return (
    <div className="app_icon--container" >
        <Image src="/assets/AppIcons/avatar-logo.png" alt="Icon" width={55} height={55} /> 
        <label>Avatar</label>       
    </div>
  )
}

export default Icon