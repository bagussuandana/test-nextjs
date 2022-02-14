import React from 'react'
import TagsGroup from '../components/TagsGroup'
import AppLayout from "../layouts/AppLayouts"

export default function Tags() {
    return (
        <AppLayout title="Tags">
            <div>
                <TagsGroup />
            </div>
        </AppLayout>
    )
}
