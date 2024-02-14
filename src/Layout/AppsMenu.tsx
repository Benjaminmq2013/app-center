import React from 'react'
import Image from 'next/image'

const AppsMenu = () => {
  return (
    <div className="app_icon--container" >
        <Image src="/assets/AppIcons/avatar-logo.png" alt="Icon" width={100} height={100} /> 
        <label>Avatar</label>       
    </div>
  )
}

export default AppsMenu