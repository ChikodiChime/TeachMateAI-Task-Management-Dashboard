"use client"

import { useGlobalState } from '@/app/context/globalProvider'
import React from 'react'
import styled from 'styled-components'
import CreateContent from '../Modals/CreateContent';
import TaskItem from '../TaskItem/TaskItem';
import { plus } from '@/app/utils/Icons';
import Modal from '../Modals/Modal';
import Image from 'next/image';

interface Props {
  title: string;
  tasks: any[];
}

function Tasks({title, tasks}: Props) {
    const { theme, openModal, modal } = useGlobalState();



  return (
    <TaskStyled theme={theme}>
      {modal && <Modal content= {<CreateContent/>}/>}
      <div className="flex flex-row gap-3 mb-10">
      <Image 
            width={40} 
            height={40} 
            layout='fixed'  
            src='/logo.png'
            alt='logo'
            style={{ width: '40px', height: '40px', objectFit: 'cover' }}

            />
            <span className='text-3xl font-bold text-[#14213d]'>TeachMateAI</span>
      </div>
      <h1>{title}</h1>

      
        <div className="tasks grid">
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.isCompleted}
            id={task.id}
          
          />
        ))}
        <button className="create-task" onClick={openModal}>
          {plus}
          Add New Task
        </button>
      </div>
      
    
      
    </TaskStyled>
  )
}

const TaskStyled = styled.main`
    width: 100%;
    background-color: ${(props) => props.theme.colorBg2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;
    padding: 2rem;
    height: 100%;

    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    .tasks{
      margin: 4rem 0;
    }
    >h1{
      font-size: clamp(1.5rem, 2vw, 2rem);
      font-weight: 800;
      position: relative;
      color: ${(props) => props.theme.colorBlueDark};

      &::after {
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 3rem;
        height: 0.2rem;
        background-color: ${(props) => props.theme.colorOrangeDark};
        border-radius: 0.5rem;
      }
    }

    .create-task{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      height: 16rem;
      color: ${(props) => props.theme.colorGrey2};
      font-weight: 600;
      cursor: pointer;
      border-radius: 1rem;
      border: 3px dashed ${(props) => props.theme.colorGrey5};
      transition: all 0.3s ease-in-out;

      &:hover{
      
        background-color:  ${(props) => props.theme.colorBlueDark};
        color: ${(props) => props.theme.colorGrey1};
      }
    }
`

export default Tasks