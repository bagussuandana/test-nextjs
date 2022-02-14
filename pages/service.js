import React from 'react'
import AppLayout from '../layouts/AppLayouts'

export default function Service() {
    return (
        <div className="space-x-2">
            Service
        </div>
    )
}

Service.getLayout = page => <AppLayout children={page} />