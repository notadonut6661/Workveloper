/*TODO:
*  RENAME THE FILE
*  ADD AN PHOTO TO THE BACKGROUND*/

import React from "react";
import Form from "../../Components/Form";

export default function SignUpWindow(): JSX.Element {
    return (<div className={'SignUpWindow'}>
        <span className={'Description'}>
            You're one step away from your dream-job, sign up in
            <span className={'Gradient'}> Workveloper </span>
            now
        </span>

        <form name={'UserData'}>
            <div>
                <Form id={'Email'} type={'email'}/>
            </div>
            <div>
                <Form  type={'password'} id={'Password'} placeholder={'Password'} />
                <input type={'button'} value={'Sign up'} />
            </div>
        </form>

        <a href={'/login'} className={'LogInLink'}>I already have an account</a>
    </div>)

}