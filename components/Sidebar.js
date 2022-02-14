import React from 'react'
import AdSquare from './AdSquare'
import Button from "./Button"
import TagsGroup from './TagsGroup'

export default function Sidebar() {

    return (
        <div className='flex flex-col justify-center w-full'>
            <Button>Pro</Button>
            <div className='my-3'>
                <AdSquare />
            </div>
            <div className='my-3'>
                new post
            </div>
        </div>
    )
}
