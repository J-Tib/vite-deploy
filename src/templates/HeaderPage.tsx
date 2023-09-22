import { useState, useEffect} from 'react'

interface HeaderProps {
  items: string [];
}

export default function HeaderPage({items} : HeaderProps) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isClicked, setIsClicked] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsClicked(window.innerWidth <= 768);
    }

    // Add the event listener
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header className='header'>
      <div className='title'>
        <a href="#" className='logo'>Portfolio</a>
      </div>
      <div className="menu">
        <i className={`bx bx-${isClicked ? 'menu' : 'x'}`} id='menu-icon' onClick={() => setIsClicked(isClicked => !isClicked)}></i>
      </div>
        {isClicked 
        || 
        <nav>
            {items.map((item, index) => (
              <a key={item} 
              href={`#${item}`} 
              className={selectedItem === index ? 'active' : ''}
              onClick={() => setSelectedItem(index)}
              >{item}</a>
            ))}
        </nav>}
    </header>
  )
}

