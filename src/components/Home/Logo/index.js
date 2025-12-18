import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import LogoT from '../../../assets/images/teaghan-j-4.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoT}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo