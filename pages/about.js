import React from 'react'
import AppLayout from '../layouts/AppLayouts'

export default function About() {
    return (
        <div className="space-x-2">
            About
        </div>
    )
}

About.getLayout = page => <AppLayout children={page} title="About US" />