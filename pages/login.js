import React from 'react'
import GuestLayout from '../layouts/GuestLayout'
import Button from '../components/Button'
import Input from '../components/Input'
import Label from '../components/Label'
import Checkbox from '../components/Checkbox'
import Link from 'next/link'

export default function Login() {
    return (
        <GuestLayout title="Login">
            <div>
                <form>
                    <div className='mb-5'>
                        <Label forInput="email">Email</Label>
                        <Input type="email" name='email' id='email' placeholder="example@domain.com" />
                    </div>
                    <div className='mb-5'>
                        <Label forInput="password">Password</Label>
                        <Input type="password" name='password' id='password' placeholder="********" />
                    </div>
                    <div className='flex items-center justify-between mb-5'>

                        <Checkbox type="checkbox" name='remember' id='remember' label="Remember me" forInput="remember" />
                        <a href="#">Forgot password</a>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Button>Login</Button>
                        <Link href="/register" >
                            <a className='text-sky-700'>Register</a>
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    )
}