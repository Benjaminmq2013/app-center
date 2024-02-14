import Icon from '@/components/Icon'
import React from 'react'

const AppsMenu = () => {
  return (
    <div className='apps-menu--Container' >
        <Icon imageUrl='/assets/AppIcons/chat-logo.png' title='Public Chat' />
        <Icon imageUrl='/assets/AppIcons/avatar-logo.png' title='Avatar Cibernetico' />
        <Icon imageUrl='/assets/AppIcons/gta-logo.png' title='Gta Radio' />
    </div>
  )
}

export default AppsMenu