import React, { act } from 'react'
import { Logo, LogoutBtn } from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus
    },
    {
      name: 'Register',
      slug: "/register",
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: "/signup",
      active: !authStatus

    },
    {
      name: 'All Post',
      slug: "/all-post",
      active: !authStatus

    },
    {
      name: 'Get Post',
      slug: "/get-post",
      active: !authStatus

    }


  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container >
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <h1>ApWright</h1>
              <Logo width='98px'></Logo>
            </Link>
          </div>
          <ul>
            {
navItems.map((item)=>(
  item.active ?(<li key={item.name}>
    <button onClick={()=>navigate(item.slug )} className='inline-block px-6 py-2 duration-200 hover:bg-blue-10 rounded-full'>{item.name}</button>
  </li>) :(null)
))
            }
            {authStatus && (
              <li>
                <LogoutBtn></
                LogoutBtn>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header