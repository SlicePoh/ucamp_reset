import React from 'react'
import s from '../style'
import {BiLockAlt,BiArrowBack} from 'react-icons/bi'
import {AiOutlineEye} from 'react-icons/ai'
export const Reset = () => {
  return (
    <div className='bg-bg1 text-white h-screen overflow-scroll pt-[21px] px-[28px] pb-[42px] '>
        <div className={`reset_back ${s.flexCenter} w-[61px] h-[61px] rounded-full bg-grey1 text-white text-xl`}>
          <BiArrowBack/>
        </div>
        <div className="reset_head ub text-4xl mt-[119px]">
            RESET
        </div>
        <div className="reset_head ub text-4xl">
            PASSWORD
        </div>
        <div className="reset_text mt-4">
            Create a new password for yourself and resume journey
        </div>
        <div className={`reset_form ${s.flexCenter} flex-col text-text1 text-xl`}>
          <div className={`${s.flexBetween} bg-grey1 w-11/12 h-[61px] rounded-[30.5px] mt-[30px] px-6`}>
            <BiLockAlt/>
            <input type="text" placeholder='create new password' className={` ${s.flexSS} bg-transparent text-sm`} />
            <AiOutlineEye/>
          </div>
          <div className={`${s.flexBetween} bg-grey1 w-11/12 h-[61px] rounded-[30.5px] mt-[40px] px-6`}>
            <BiLockAlt/>
            <input type="text" placeholder='confirm password' className={` ${s.flexSS} bg-transparent text-sm`} />
            <AiOutlineEye/>
          </div>
          
          <button type="submit" className={`ub ${s.flexCenter} cursor-pointer bg-blue1 w-11/12 h-[61px] mt-[188px] rounded-[30.5px] text-white text-2xl`}>
            RESET
          </button>
        </div>
    </div>
  )
}
