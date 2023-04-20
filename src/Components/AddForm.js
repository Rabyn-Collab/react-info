import React from 'react'

import {
  Input,
  Radio
} from "@material-tailwind/react";


const AddForm = () => {



  return (
    <div className='max-w-xl p-10 shadow-xl'>
      <form className='space-y-7' >
        <Input type='email' label='Email' />
        <Input type='text' label='Your Name' />

        <div className="">
          <h1>Your Gender</h1>
          <div className='flex gap-10'>
            <Radio id="html" name="type" label="Male" />
            <Radio id="react" name="type" label="Female" />
            <Radio id="react" name="type" label="Other" />
          </div>

        </div>



      </form>

    </div>
  )
}

export default AddForm