import {useState} from 'react'
import './index.css'

import {MainContainer, MsgContent} from './styledComponents'

const img1 = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const img2 = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [unlock, setUnlock] = useState(false)

  const handleClick = () => {
    setUnlock(prevUnlock => !prevUnlock)
  }

  return (
    <MainContainer>
      <img
        src={unlock ? img2 : img1} // swap the URLs for lock and unlock
        className="image"
        alt={unlock ? 'unlock' : 'lock'} // change alt attribute based on the state
      />
      <MsgContent>
        {unlock ? 'Your Device is Unlocked' : 'Your Device is Locked'}
      </MsgContent>
      <button className="custom-button" type="button" onClick={handleClick}>
        {unlock ? 'Lock' : 'Unlock'}
      </button>
    </MainContainer>
  )
}

export default Unlock
