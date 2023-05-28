import React from 'react'
import blog from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./NewPost.css"

const NewPost = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState()
  const [body, setBoby] = useState()

  const createPost =  async (e) => {
    e.preventDefault();

    const post = {title, body, userId: 1};

    await blog.post("/posts", {
      body: post,
    });
    navigate("/")
  }

  return (
    <div className='new-post'>
      <h2>Inserir post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='form-control'>
          <label htmlFor="tiltle">Titulo:</label>
          <input type="text" name="title" id='title' placeholder='Digite o titulo' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor="body">Conteudo:</label>
          <textarea name='body' id='body' placeholder='Digite o conteudo:' onChange={(e) => setBoby(e.target.value)}></textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn' />
      </form>
    </div>
  )
}

export default NewPost;