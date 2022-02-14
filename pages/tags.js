import React from 'react'
import TagsGroup from '../components/TagsGroup'
import AppLayout from "../layouts/AppLayouts"

export default function Tags() {
    return (
        <div>
            <TagsGroup />
        </div>
    )
}

Tags.getLayout = page => <AppLayout children={page} />