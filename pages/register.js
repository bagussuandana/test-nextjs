import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'
import Input from '../components/Input'
import Label from '../components/Label'
import Select from '../components/Select'
import GuestLayout from '../layouts/GuestLayout'

export default function Register() {
    return (
        <div>
            <form>
                <div className='mb-5'>
                    <Label forInput="name">Name</Label>
                    <Input name='name' id='name' placeholder="Alucard" />
                </div>
                <div className='mb-5'>
                    <Label forInput="email">Email</Label>
                    <Input type="email" name='email' id='email' placeholder="example@domain.com" />
                </div>
                <div className='mb-5'>
                    <Label forInput="password">Password</Label>
                    <Input type="password" name='password' id='password' placeholder="********" />
                </div>
                <div className='mb-5'>
                    <Label forInput="password_confirmation">Password</Label>
                    <Input type="password" name='password_confirmation' id='password_confirmation' placeholder="********" />
                </div>
                <div className='mb-5'>
                    <Label forInput="gender">Gender</Label>
                    <Select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                    </Select>
                </div>
                <div className='flex items-center justify-between mb-5'>

                    <Checkbox type="checkbox" name='acceptance' id='acceptance' label="Agree with Privacy and Terms" forInput="acceptance" />
                </div>
                <div className='flex items-center justify-between'>
                    <Button>Register</Button>
                    <Link href="/login" >
                        <a className='text-sky-700'>Login</a>
                    </Link>
                </div>
            </form>
        </div>
    )
}

Register.getLayout = page => <GuestLayout title="Register" header="Register" children={page} />