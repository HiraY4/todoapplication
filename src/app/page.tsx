"use client";
import React from 'react'
import Image from 'next/image';
import { Todo } from '@/components/Todo';
import { Header } from '@/components/Header';
import ListComponents from '@/components/ListComponents';

export default function HomePage() {
  return (
    <div className=''>
      <Header />
      <Todo />
    </div>
  )
}
