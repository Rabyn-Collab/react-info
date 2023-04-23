import React from 'react'

import {
  Button,
  Checkbox,
  Input,
  Option,
  Radio,
  Select,
  Textarea
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


const AddForm = () => {

  const infoSchema = Yup.object().shape({
    // email: Yup.string().email().required(),
    // name: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!')
    //   .required('Required'),
    // gender: Yup.string().required('Required'),
    // skills: Yup.array().required('Required'),
    // country: Yup.string().required('Required'),
    // detail: Yup.string().required('Required'),
    // image: Yup.mixed().required('Required').test('File_type', 'invalid', (val) => val && ['image/png'].includes(val.type))


  });

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      gender: '',
      skills: [],
      country: '',
      detail: '',
      review: '',
      image: ''

    },
    onSubmit: (val) => {
      console.log(val.review);
    },
    validationSchema: infoSchema
  });

  const radioData = [
    { id: 'male', name: 'gender', value: 'male', label: 'Male' },
    { id: 'female', name: 'gender', value: 'female', label: 'Female' },
    { id: 'other', name: 'gender', value: 'other', label: 'Other' },
  ];

  const checkData = [
    { id: 'python', name: 'skills', value: 'python', label: 'Python' },
    { id: 'css', name: 'skills', value: 'css', label: 'Css' },
    { id: 'javascript', name: 'skills', value: 'javascript', label: 'Javascript' },

  ];

  return (
    <div className='max-w-xl p-10 shadow-xl'>
      <form onSubmit={formik.handleSubmit} className='space-y-7' >
        <Input error={formik.errors.email && formik.touched.email ? true : false} type='email' label='Email' name='email' onChange={formik.handleChange} value={formik.values.email} />

        <Input type='text' label='Your Name' name='name' onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name && formik.touched.name && <h1 className='text-pink-500'>{formik.errors.name}</h1>}

        <div>
          <h1>Your Gender</h1>
          <div className='flex gap-10'>
            {radioData.map((d) => {
              return <Radio key={d.id} id={d.id} name={d.name} label={d.label} value={d.value} onChange={formik.handleChange} />;
            })}
            {formik.errors.gemder && formik.touched.gender && <h1 className='text-pink-500'>{formik.errors.gender}</h1>}


          </div>

        </div>

        <div>
          <h1>Your Skills</h1>
          <div className='flex gap-10'>
            {checkData.map((c) => {
              return <Checkbox key={c.id} label={c.label} name={c.name} value={c.value} onChange={formik.handleChange} />;
            })}
            {formik.errors.skills && formik.touched.skills && <h1 className='text-pink-500'>{formik.errors.skills}</h1>}


          </div>

        </div>

        <div className="w-72">
          <Select label="Select Country" name='country' onChange={(e) => formik.setFieldValue('country', e)}  >
            <Option value='nepal'>Nepal</Option>
            <Option value='china'>China</Option>
            <Option value='india'>India</Option>
          </Select>
          {formik.errors.country && formik.touched.country && <h1 className='text-pink-500'>{formik.errors.country}</h1>}
        </div>

        <div className="w-96">
          <Textarea label="Your Detail" />
        </div>
        {formik.errors.name && formik.touched.name && <h1 className='text-pink-500'>{formik.errors.name}</h1>}




        <Input

          onChange={(e) => {
            const imageFile = e.target.files[0];
            console.log(imageFile);
            // formik.setValues('image', imageFile);
            const reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.addEventListener('load', () => {
              formik.setFieldValue('review', reader.result)
            })

          }}

          type='file' id='image' label='select an image' name='image' accept='image/*' />


        {/* <img src={formik.values.review} alt="" />
        {formik.errors.image && formik.touched.image && <h1 className='text-pink-500'>{formik.errors.image}</h1>} */}


        <Button type='submit'>Submit</Button>

      </form>

    </div>
  )
}

export default AddForm