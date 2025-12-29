import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { preview } from '../assets';
import { getRandomPrompts } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {
New-Item .gitignore

  }

  const handleSubmit = () => {

  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompts(form.prompt);
    if (!randomPrompt) return;
    setForm({ ...form, prompt: randomPrompt })
  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div className=' text-[#222328] text-4xl'>
        <h1 className='font-extrabold'>Create</h1>
        <p className='text-[#666e75] text-lg max-w[500px]'>
          Create through a collection of imaginative and visually stunning images through by STACKSON.AI and share with the community
        </p>
      </div>

      <form className='mt-8 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Mansoor Ahmad"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="prompt"
            type="text"
            name="prompt"
            placeholder="an oil pastel drawing of an annoyed cat in a spaceship"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex justify-center w-64 p-3 h-63 items-center'>
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain' />
            ) :
              (
                <img
                  src={preview}
                  alt={preview}
                  className='w-9/12 h-9/12 object-contain opacity-50' />
              )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
          <button type='button' onClick={generateImage} className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer hover:bg-green-800 duration-400 transition-all'>
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className='mt-10'>
          <p className='mt-2 text-[#666e74] text-sm'>
            Once you have created the image you want, you can share it with others in the community
          </p>
          <button
            type="submit"
            className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm sm:w-auto w-full px-5 py-2.5 text-center'
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>

        </div>
      </form>
    </section>
  )
}

export default CreatePost
