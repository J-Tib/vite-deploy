
interface BtnProps {
    children: string
    handleClick?: () => void
    link?: string
}

export default function ResBtn({children, handleClick, link} : BtnProps) {
  return (
    <div className="btn">
      <a 
      href={link} 
      className='cv-btn' 
      onClick={handleClick}>{children}
      </a>
    </div>
  )
}
