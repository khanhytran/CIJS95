import React from 'react'
import { useState } from 'react'
import './Current.css'

const Current = (props) => {
    
    return (
        <div className='w-4/12'>
            <div className={`cursor-pointer relative rounded-lg overflow-hidden border-2 ${props.isActive ? 'bg-blue' : 'bg-white'}`} onClick={props.handleClick}>
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center"></div>
                <div className="relative py-3 pl-6 text-left">
                    <div className="flex items-center space-x-4">
                        <label
                            className="inline-block h-4 w-4 rounded-full"
                            style={{
                                outline: props.isActive ? 'white solid 1px bg' : 'black solid 1px',
                                outlineOffset: '4px'
                            }}
                        ></label>
                        <h4 className={`inline-block fw-700 text-16 ${props.isActive ? 'text-white' : 'text-gray-800'}`}>
                            <small className='text-base font-bold uppercase'>{props.name} </small>
                            <b className='text-20'>{props.level}</b>
                        </h4>
                    </div>
                    <p className={`w-max ${props.isActive ? 'text-white' : 'text-gray-800'}`}>{props.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Current