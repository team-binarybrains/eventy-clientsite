import React, { useState } from 'react';
import style from './form.module.css';

const Form = () => {
    const [activePanel,setActivePanel] = useState('right-panel-active');

    return (
        <div className='h-screen flex justify-center items-center px-3'>
            <div className={`${style.container} ${activePanel}`}>
                <div className={`${style.formContainer} ${style.signUpContainer}`}>
                    <form className={style.form} action="#">
                        <h1 className={style.h1}>Create Account</h1>
                        <div className={`${style.socialContainer}`}>
                            <a className={`${style.a} social`} href=" " ><i className="fab fa-facebook-f"></i></a>
                            <a className={`${style.a} social`} href=" " ><i className="fab fa-google-plus-g"></i></a>
                            <a className={`${style.a} social`} href=" " ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className={style.span}>or use your email for registration</span>
                        <input className={style.input} type="text" placeholder="Name" />
                        <input className={style.input} type="email" placeholder="Email" />
                        <input className={style.input} type="password" placeholder="Password" />
                        <button className={style.button}>Sign Up</button>
                    </form>
                </div>
                <div className={`${style.formContainer} ${style.signInContainer}`}>
                    <form className={style.form} action="#">
                        <h1 className={style.h1}>Sign in</h1>
                        <div className={`${style.socialContainer}`}>
                            <a className={`${style.a} social`} href=" " ><i className="fab fa-facebook-f"></i></a>
                            <a className={`${style.a} social`} href=" " ><i className="fab fa-google-plus-g"></i></a>
                            <a className={`${style.a} social`} href=" " ><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className={style.span}>or use your account</span>
                        <input className={style.input} type="email" placeholder="Email" />
                        <input className={style.input} type="password" placeholder="Password" />
                        <a className={`${style.a}`} href=" ">Forgot your password?</a>
                        <button className={style.button}>Sign In</button>
                    </form>
                </div>
                <div className={`${style.overlayContainer}`}>
                    <div className={`${style.overlay}`}>
                        <div className={`${style.overlayPanel} ${style.overlayLeft}`}>
                            <h1 className={style.h1}>Welcome Back!</h1>
                            <p className={style.p}>To keep connected with us please login with your personal info</p>
                            <button className={`${style.ghost} ${style.button}`} id="signIn" onClick={()=> {
                                setActivePanel(" ");
                            }}>Sign In</button>
                        </div>
                        <div className={`${style.overlayPanel} ${style.overlayRight}`}>
                            <h1 className={style.h1}>Hello, Friend!</h1>
                            <p className={style.p}>Enter your personal details and start journey with us</p>
                            <button className={`${style.ghost} ${style.button}`} id="signUp" onClick={()=> {
                                setActivePanel(style.rightPanelActive);
                            }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;