/*TODO:
*  RENAME THE FILE
*  ADD AN PHOTO TO THE BACKGROUND*/

export default function SignUpWindow(): JSX.Element {
    return (<div className={'SignUpWindow'}>
        <span className={'Description'}>
            You're one step away from your dream-job, sign up in
            <span className={'Gradient'}> Workveloper </span>
            now
        </span>

        <form name={'UserData'}>
            <div>
                <div className={'InputText'} id={'Email'}>
                    <input type={'email'} placeholder={'E-mail'}/>
                </div>

            </div>
            <div>
                <div className={'InputText'} id={'Password'}>
                    <input type={'password'} placeholder={'Password'}/>
                </div>
                <input type={'button'} value={'Sign up'} />
            </div>
        </form>

        <a href={'/login'} className={'LogInLink'}>I already have an account</a>
    </div>)

}