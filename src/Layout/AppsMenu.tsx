import Icon from '@/components/Icon'
import React from 'react'
import { useRouter } from 'next/router'

const AppsMenu = () => {
  const router = useRouter()

  return (
    <div className="apps-menu--wrapper">
      <Icon imageUrl='/assets/AppIcons/apps-logo.png' title='App Center' horizontal />
      <div className='apps-menu--Container' >
        <Icon imageUrl='/assets/AppIcons/chat-logo.png' title='Public Chat' onClick={() => router.push("/chat") } />
        <Icon imageUrl='/assets/AppIcons/avatar-logo.png' title='Avatar Cibernetico' />
        <Icon imageUrl='/assets/AppIcons/gta-logo.png' title='Gta Radio' />
        <Icon imageUrl='/assets/AppIcons/interest.svg' title='Interes Compuesto' onClick={() => router.push("/interes-compuesto") } />
        <Icon imageUrl='/assets/AppIcons/equis-cero.svg' title='Equis Cero' onClick={() => router.push("/equis-cero") } />
      </div>
    </div>
  )
}

export default AppsMenu