import React from 'react'
import Header from '../components/Header'

const AboutPage = () => {
  return (
    <>
    <Header />
    <div className='bg-muted min-h-[100vh] mt-[5rem] p-8 flex'>
      <div className='max-w-2xl mx-auto flex-col'>
        <h1 className='text-3xl font-bold text-foreground text-center m-4 underline'>About</h1>
        <p className='mb-2 text-accent-foreground text-xl text-center'>A place to share all your ideas with the world</p>
        <p className='mt-3 mb-2 text-accent-foreground text-xl'>Does it often happens that you get an idea, you note it down in your notes app, and forget about it?</p>
        <p className='mt-2 mb-2 text-accent-foreground text-xl'>don't let your ideas stay dorment in your notes app, share them with others here</p>
        <p className='mt-2 mb-2 text-accent-foreground text-xl'>explore other people's ideas, collaborate with them, place bounty on ideas which you would like if they got implemented(comming soon!)</p>
      </div>
    </div>
    </>
  )
}

export default AboutPage