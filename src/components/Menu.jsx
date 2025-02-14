import React, { useState } from 'react'
import { publicRoutes, privateRoutes } from '../utils/routes'
import { NavLink, useLocation } from 'react-router-dom'

const ExampleMenu = ({ menu }) => {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedGroups, setExpandedGroups] = useState({
    cards: false,
    paginate: false,
  })

  const menuItemsGroups = ['cards', 'paginate']

  const toggleGroup = (group) => {
    setExpandedGroups(prev => ({
      ...prev,
      [group]: !prev[group]
    }))
  }

  return (
    <ul className="flex gap-2">
      {menu.map(page => (
        page.menu && (
          <li key={page.path}>
            <NavLink
              to={page.path}
              className={`font-bold text-2xl text-white
                ${pathname === page.path ? 'text-[#B91F47]' : 'text-black'}
                ${pathname !== page.path && 'hover:text-[#00367E]'}`}
            >
              {page.name}
            </NavLink>
          </li>
        )
      ))}

      <li>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button
            className="font-bold text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '0 20px',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              gap: '8px',
            }}
          >
            {isOpen ? 'Close Menu' : 'Open Menu'}
            <span
              style={{
                transform: `rotate(${isOpen ? 180 : 0}deg)`,
                transition: 'transform 0.3s ease',
              }}
            >
              ▼
            </span>
          </button>

          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              marginTop: '8px',
              backgroundColor: '#f9f9f9',
              minWidth: '160px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              borderRadius: '4px',
              overflow: 'hidden',
              maxHeight: isOpen ? '500px' : '0',
              opacity: isOpen ? 1 : 0,
              transition: 'max-height 0.3s ease, opacity 0.3s ease',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {menuItemsGroups.map(group => (
                <li key={group}>
                  <button
                    onClick={() => toggleGroup(group)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      textAlign: 'left',
                      border: 'none',
                      background: 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ textTransform: 'capitalize' }}>{group}</span>
                    <span style={{ transition: 'transform 0.3s', transform: `rotate(${expandedGroups[group] ? 180 : 0}deg)` }}>
                      ▼
                    </span>
                  </button>

                  {expandedGroups[group] && (
                    <ul style={{ margin: 0, paddingLeft: '16px', listStyle: 'none' }}>
                      {menu
                        .filter(page => page.type === group)
                        .map(page => (
                          <li key={page.path}>
                            <NavLink
                              to={page.path}
                              className={`font-bold text-xl
                                ${pathname === page.path ? 'text-[#B91F47]' : 'text-black'}
                                ${pathname !== page.path && 'hover:text-[#00367E]'}`}
                              style={{
                                display: 'block',
                                padding: '8px 16px',
                                textDecoration: 'none'
                              }}
                            >
                              {page.name}
                            </NavLink>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </ul>
  )
}

const My_Menu = () => {
  const token = localStorage.getItem('Token')

  return <nav id="menu">{token ? <ExampleMenu menu={privateRoutes} /> : <ExampleMenu menu={publicRoutes} />}</nav>
}

export default My_Menu
