import Form from "../../../Components/Form";

export default function LoginWindow() {
    return  (<>
        <div className={'Auth'}>
            <div>
            <Form type={'email'} id={'Email'} placeholder={'Email'}/>
            <Form type={'password'} id={'Password'} placeholder={'Password'}/>
            <button className={'LogIn'} >Log in</button>
            <a href={'/login'} className={'LogInLink'}>I don't have an account</a>

            </div>

        </div>
    </>)
}