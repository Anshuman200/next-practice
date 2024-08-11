import { Button } from 'antd'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Buttons = ({title, loading}:{title:string,loading:boolean}) => {
  return (
    <Button loading={loading} htmlType='submit' icon={<BsArrowRight style={{fontSize:22}} />} iconPosition='end' type='default' className='bg-blue-600 border-0 text-white hover:bg-blue-900 font-semibold w-full lg:w-60 min-h-10 mt-4 rounded-full'>
      {title}
    </Button>
  )
}

export default Buttons
