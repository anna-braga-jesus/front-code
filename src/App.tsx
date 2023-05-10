import { useState } from 'react'
import './App.css'
import { CreateModal } from './components/create-modal/create-modal';
import { Post } from './components/delete-modal/delete-modal';
import { usePostData } from './hooks/usePostData';

function App() {
  const {data} = usePostData();
  const [isModalOpen, setIsModalOpen]= useState(false);

const handleOpenModal = () => {
setIsModalOpen(prev => !prev)
}

  return (
    <div className='container'>
      
      <h1>CodeLeap</h1>
      <div className="post-grid">
    {data?.map(postData => 
    <Post 
    username={postData.username}
    title={postData.title} 
    content={postData.content}
    />)}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}    
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
