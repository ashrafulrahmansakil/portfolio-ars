import React from 'react'
import Label from './../InputGroup/Label';
import InputGroup from './../InputGroup/InputGroup';

export default function Form() {
    return (
        <div>
            <form action="">
                <h1></h1>
                <div>
                    <div>
                        <Label htmlFor="email" className='' label="Email" />
                        <InputGroup className='' id="" />
                    </div>
                </div>
            </form>
        </div>
    )
}
