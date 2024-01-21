"use client";
import React from 'react'
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider'
import Image from 'next/image';
import Link from 'next/link';
import menu  from '@/app/utils/menu'
import { usePathname, useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { UserButton, useClerk, useUser } from '@clerk/nextjs';
import { arrowLeft, bars, logout } from '@/app/utils/Icons';
import { transform } from 'next/dist/build/swc';
function SIdebar() {
    const {theme, collapsed, collapseMenu} = useGlobalState()
    const { signOut } = useClerk();
    const {user} = useUser();

    const router = useRouter();
    const pathname = usePathname();
    
    const {firstName, lastName, imageUrl} = user || {firstName: "", lastName: "", imageUrl: "" }

    const handleClick = (link: string) => {
      router.push(link);
    }
   
  return (
    <SidebarStyled theme={theme} collapsed = {collapsed}>
      <button className="toggle-nav" onClick={collapseMenu}>
        {collapsed ? bars : arrowLeft}
      </button>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image 
            width={70} 
            height={70} 
            layout='fixed'  
            src={imageUrl} 
            alt='profile'
            style={{ width: '70px', height: '70px', objectFit: 'cover' }}
            />
        </div>
        <div className="user-btn absolute z-20 top-0 w-full h-full">
          <UserButton/>
        </div>
        <h1 className='capitalize'>
          {firstName} {lastName}
        </h1>
      </div>
      <ul className="nav-items ">
        {menu.map((item) => {
          const link = item.link
          return( 
          <li 
          key={item.id}
            className={`nav-item ${pathname === link ? "active" : ""}`} 
            onClick={() => {
              handleClick(link)
          }} >
            {item.icon}
            <Link href={link}>
              {item.title}
            </Link>
          </li>
          );
        })}
      </ul>
      <div className="sign-out relative ml-6 mb-[1.5rem]">
        <Button
          name= {"Sign Out"}
          type= {"submit" }
          padding= {"0.4rem 0.8rem"}
          borderRad= {"0.8rem"}
          fw= {"500"}
          fs= {"1.2rem"}
          color='black'
          icon= {logout}
          click={() => {
            signOut(() => router.push("/signin"))
          }}
        />
      </div>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav<{collapsed: boolean}>`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorOrangeDark};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  color: ${(props) => props.theme.colorTextPrimary};

  
  .toggle-nav{
    display: none;
    position: absolute;
    right: -40px;
    top: 2.8rem;
    padding: 0.8rem .9rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

    border-right: 2px solid ${(props) => props.theme.borderColor2};
    border-bottom: 2px solid ${(props) => props.theme.borderColor2};
    border-top: 2px solid ${(props) => props.theme.borderColor2};

    background-color: ${(props) => props.theme.colorOrangeDark};
  }
  @media screen and (max-width: 768px){
      position: fixed;
      height: calc(100vh - 2rem);
      z-index: 10;

      /* transition: all .3s cubic-bezier(0.53, 0.21, 0, 1); */
      transform: ${(props) => props.collapsed ? "translateX(-107%)" : "translateX(0)"};
      
      .toggle-nav{
        display: block;
      }
     
    }

  

  .user-btn{
      .cl-rootBox{
        width: 100%;
        height: 100%;

        .cl-userButtonBox{
          width: 100%;
          height: 100%;

          .cl-userButtonTrigger{
            width: 100%;
            height: 100%;
            opacity: 0;
          }
        }
      }
    }

  .profile{
    margin: 1.5rem;
    position: relative;
    padding: 1rem 0.8rem;

    border-radius: 1rem;
    cursor: pointer;

    font-weight: 500;
    color: ${(props) => props.theme.colorBlueDark};
    display: flex;
    align-items: center;
    justify-content: center;

   

    .profile-overlay{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      z-index: 0;
      background: ${(props) => props.theme.colorBg3};
      transition: all .5s linear;
      border-radius: 1rem;
      border: 2px solid ${(props) => props.theme.borderColor2};
      opacity: .2;

    }

    h1{
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      line-height: 1;
      font-weight: 700;
    }

    .image, h1{
      position: relative;
      z-index: 1;
    }

    .image{
      flex-shrink: 0;
      display: inline-block;
      overflow: hidden;
      transition: all 0.5s ease;
      border-radius: 100%;
      width: 70px;
      height: 70px;

      img{
        border-radius: 100%;
        transition: all .5s ease;
      
        
      }
    }

    >h1{
      margin-left: .8rem;
      font-size: clamp(1rem, 3vw, 1.4rem);
      line-height: 100%;
    }


    &:hover{
      .profile-overlay{
        opacity: .5;
        border: 2px solid ${(props) => props.theme.borderColor2};
      }

      img{
        transform: scale(1.1);
      }
    }
  }

  .nav-item{
    position: relative;
    padding: 1rem 1rem 1rem 2.1rem;
    margin: .3rem 0;
    

    display: grid;
    grid-template-columns:  40px 1fr;
    cursor: pointer;
    align-items: center;
    

    &::after{
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0%;
      height: 100%;
      z-index: 1;
      background-color: ${(props) => props.theme.activeNavLinkHover};
      transition: all .3s ease-in-out;
    }

    &::before{
      position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      z-index: 1;
      background-color: ${(props) => props.theme.colorBlueDark};
     
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }

    a{
      font-weight: 500;
      transition: all .3s ease-in-out;
      z-index: 1;
      line-height: 0;
    }

    i{
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colorBlueDark};
    }

    &:hover{
      
      &::after {
        width: 100%;
      }
    }
  }

  .active{
    background-color: ${(props) => props.theme.activeNavLink};

    i, a{
      color: ${(props) => props.theme.colorIcons2};
    }
  }

  .active::before {
    width: 0.3rem;
  }
`;

export default SIdebar