import React from 'react'
import AppLayout from '../layouts/AppLayouts'

export default function Projects() {
    return (
        <div className="space-x-2">
            Projects
        </div>
    )
}

Projects.getLayout = page => <AppLayout children={page} />