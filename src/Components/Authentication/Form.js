import React, { useState } from 'react';
import styleLg from './form.module.css';
import styleSm from './formSm.module.css';

const Form = () => {
    const [activePanel,setActivePanel] = useState('right-panel-active');

    return (
        <section className={`${styleLg.bg}`}>
            <div className={`min-h-[calc(100vh-126px)] flex justify-center items-center px-3 route`}>

                {/* for large device */}
                <div className={`${styleLg.container} ${activePanel} hidden sm:block`}>

                    {/* for sign up */}
                    <div className={`${styleLg.formContainer} ${styleLg.signUpContainer}`}>
                        <form className={styleLg.form} action="#">
                            <h1 className={styleLg.h1}>Create Account</h1>
                            <div className={`${styleLg.socialContainer}`}>
                                <a className={`${styleLg.a} social`} href=" " ><i className="fab fa-facebook-f"></i></a>
                                <a className={`${styleLg.a} social`} href=" " ><i className="fab fa-google-plus-g"></i></a>
                                <a className={`${styleLg.a} social`} href=" " ><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className={styleLg.span}>or use your email for registration</span>
                            <input className={styleLg.input} type="text" placeholder="Name" />
                            <input className={styleLg.input} type="email" placeholder="Email" />
                            <input className={styleLg.input} type="password" placeholder="Password" />
                            <button className={styleLg.button}>Sign Up</button>
                        </form>
                    </div>

                    {/* for sign in */}
                    <div className={`${styleLg.formContainer} ${styleLg.signInContainer}`}>
                        <form className={styleLg.form} action="#">
                            <h1 className={styleLg.h1}>Sign in</h1>
                            <div className={`${styleLg.socialContainer}`}>
                                <a className={`${styleLg.a} social`} href=" " ><i className="fab fa-facebook-f"></i></a>
                                <a className={`${styleLg.a} social`} href=" " ><i className="fab fa-google-plus-g"></i></a>
                                <a className={`${styleLg.a} social`} href=" " ><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className={styleLg.span}>or use your account</span>
                            <input className={styleLg.input} type="email" placeholder="Email" />
                            <input className={styleLg.input} type="password" placeholder="Password" />
                            <a className={`${styleLg.a}`} href=" ">Forgot your password?</a>
                            <button className={styleLg.button}>Sign In</button>
                        </form>
                    </div>

                    <div className={`${styleLg.overlayContainer}`}>
                        <div className={`${styleLg.overlay}`}>
                            <div className={`${styleLg.overlayPanel} ${styleLg.overlayLeft} space-y-5`}>
                                <h1 className={`font-bold text-white text-2xl`}>Welcome Back!</h1>
                                <p className={`text-xs font-bold`}>To keep connected with us please login with your personal info</p>
                                <button className={`${styleLg.ghost} ${styleLg.button} bg-gradient-to-r from-rose-700 to-red-500`} id="signIn" onClick={() => {
                                    setActivePanel(" ");
                                }}>Sign In</button>
                            </div>
                            <div className={`${styleLg.overlayPanel} ${styleLg.overlayRight} space-y-5`}>
                                <h1 className={`font-bold text-white text-2xl`}>Hello, User</h1>
                                <p className={`text-xs font-bold`}>Enter your personal details and start journey with us</p>
                                <button className={`${styleLg.ghost} ${styleLg.button} bg-gradient-to-r from-rose-700 to-red-500`} id="signUp" onClick={() => {
                                    setActivePanel(styleLg.rightPanelActive);
                                }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* for small device */}
                <div class={`${styleSm.main} sm:hidden`}>
                    <input className={styleSm.chk} type="checkbox" id="chk" aria-hidden="true" />

                    {/* for sign up */}
                    <div className={`${styleSm.signup}`}>
                        <form>
                            <label className={`${styleSm.label}`} for="chk" aria-hidden="true">Sign up</label>
                            <input className={`${styleSm.input}`} type="text" name="txt" placeholder="User name" required="" />
                            <input className={`${styleSm.input}`} type="email" name="email" placeholder="Email" required="" />
                            <input className={`${styleSm.input}`} type="password" name="pswd" placeholder="Password" required="" />
                            <button className={`${styleSm.button}`}>Sign Up</button>
                        </form>
                    </div>

                    {/* for login/ sign in */}
                    <div className={`${styleSm.login}`}>
                        <form>
                            <label className={`${styleSm.label}`} for="chk" aria-hidden="true">Login</label>
                            <input className={`${styleSm.input}`} type="email" name="email" placeholder="Email" required="" />
                            <input className={`${styleSm.input}`} type="password" name="pswd" placeholder="Password" required="" />
                            <button className={`${styleSm.button} bg-gradient-to-r from-[#ff4b2beb] to-orange-400`}>Sign In</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Form;