import React from 'react'
import Image from 'next/image'

interface props {
  title: string,
  imageUrl: string,
  horizontal?: boolean,
  onClick?: () => void
}

/**
 * 
 * @param props 
 * @param props.title
 * @param props.imageUrl
 * @param props.horizontal
 * 
 * 
 * @returns 
 * const Icon = (props:props) => {
    return (
      <div className="app_icon--container" >
          <Image src="/assets/AppIcons/avatar-logo.png" alt="Icon" width={55} height={55} /> 
          <label>Avatar</label>       
      </div>
    )
  }

  @example 
  <Icon imageUrl='/assets/AppIcons/avatar-logo.png' title='Avatar' />
 */

const Icon = (props:props) => {
  return (
    <div className={"app_icon--container" + (props.horizontal ? " horizontal" : "")} onClick={ props.onClick } >
        <Image src={ props.imageUrl } alt="Icon" width={55} height={55} /> 
        <label className='title' >{ props.title }</label>       
    </div>
  )
}

export default Icon