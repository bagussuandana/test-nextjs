import React, { useState, useEffect } from 'react'
import axios from 'axios'
const serverUrl =
    process.env.NODE_ENV === "development"
        ? process.env.devServer
        : process.env.prodServer

export default function TagsGroup() {
    const [tags, setTags] = useState([])
    const [mounted, setMounted] = useState(false)
    const getTags = async () => {
        try {
            let response = await axios.get(`${serverUrl}tag/data`)
            setTags(response.data.data)
        } catch (error) {
            console.log(error.message);
        }
        setMounted(true)
    }
    React.useEffect(() => {
        getTags()
    }, [mounted])

    if (!mounted) {
        return <div className='flex items-center justify-center'>
            <p>Loading . . .</p>
        </div>
    }
    return (
        <div className='flex flex-col pb-24'>
            <h1 className='text-2xl underline'>Tags</h1>
            <div className='flex flex-wrap w-full mt-8'>
                {tags.map((tag, i) =>
                    <div key={i} className="text-xs">
                        <p className='bg-sky-500 px-2 py-2 m-1 text-white rounded-full'>{tag.name}</p>
                    </div>

                )}
            </div>
        </div>
    )
}
