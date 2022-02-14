import React from 'react'
import SearchForm from '../components/SearchForm'
import AppLayout from '../layouts/AppLayouts'

console.log(
  process.env.NODE_ENV === "development"
    ? process.env.devMode
    : process.env.prodMode
);
export default function Home() {

  return (
    <AppLayout>
      <div className="space-x-2">
        <SearchForm placeholder="search blog" />
      </div>
    </AppLayout>
  )
}
