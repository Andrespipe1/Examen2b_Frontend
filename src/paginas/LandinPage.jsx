import logoDarkMode from '../assets/dark.png'
import logoFacebook from '../assets/facebook.png'
import logoGithub from '../assets/github.png'
import logoLinkedind from '../assets/linkedin.png'
import logoRocket from '../assets/rocket1.webp'
import logoCode from '../assets/code.png'
import logoConsulting from '../assets/consulting.png'
import logoDesign from '../assets/design.png'
import logoWeb1 from '../assets/web1.png'
import logoWeb2 from '../assets/web2.png'
import logoWeb3 from '../assets/web3.png'
import logoWeb4 from '../assets/web4.png'
import logoWeb5 from '../assets/web5.png'
import logoWeb6 from '../assets/web6.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'


export const LandinPage = () => {
    const [darkMode, setdarkMode] = useState(false)
    return (
        <div className={darkMode ? "dark" :""}>

            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
            <section className='bg-white dark:bg-gray-800'>
                <nav className='p-6 flex justify-between items-center'>
                    <h1 className='text-3xl font-semibold text-teal-600 dark:text-white'>SALUD API</h1>
                    <ul className='flex items-center gap-6'>
                        <li>
                            <img 
                                onClick={() => setdarkMode(!darkMode)} 
                                className='cursor-pointer w-8 h-8 transition duration-300 transform hover:scale-110' 
                                src={logoDarkMode} 
                                alt="logo dark mode" 
                            />
                        </li>
                    </ul>
                </nav>

                <div className='text-center pt-16'>
                    <h2 className='text-5xl font-bold text-teal-600 mb-4 md:text-6xl'>Transforma tu Salud con Tecnología</h2>
                    <h3 className='text-2xl text-gray-700 dark:text-white mb-6 md:text-3xl font-medium'>
                        Tu Compañero de Salud Personalizado
                    </h3>
                    <p className='text-lg text-gray-700 dark:text-white max-w-2xl mx-auto mb-6 leading-relaxed md:text-xl'>
                        "Todo lo que necesitas para cuidar de ti, con la comodidad de un solo clic."
                        <br />
                        Ya sea que quieras mejorar tu dieta, tus rutinas de ejercicio o dormir mejor, nuestra aplicación te ofrece herramientas fáciles de usar y recomendaciones basadas en tus datos.
                    </p>

                    <Link 
                        to="/login" 
                        className='bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-teal-500 hover:shadow-lg mt-6 inline-block'>
                        ¡Empieza ahora!
                    </Link>
                </div>

                <div className='relative mx-auto mt-12 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-b from-indigo-400 rounded-full overflow-hidden shadow-lg'>
                    <img 
                        src={logoRocket} 
                        alt="logo-rocket" 
                        className='w-full h-full object-cover transition-all duration-500 transform hover:scale-110'
                    />
                </div>
            </section>


                <section>
                    <div>
                        <h3 className='text-3xl py-1 dark:text-white'>Services offered</h3>
                        <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, delectus iure <span className='text-teal-500'>quibusdam</span> quas quaerat itaque, est minima ducimus recusandae illo ipsam numquam nam earum libero <span className='text-teal-500'>deleniti</span> voluptatem! Autem, veniam ut.</p>
                        <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, delectus iure <span className='text-teal-500'>quibusdam</span> quas quaerat itaque, est minima ducimus recusandae illo ipsam numquam nam earum libero <span className='text-teal-500'>deleniti</span> voluptatem! Autem, veniam ut.</p>
                    </div>

                    <div className='md:flex md:flex-wrap lg:flex lg:justify-center gap-10'>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-100'>
                            <img className='mx-auto' src={logoCode} alt="" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                            <p className='py-4 text-teal-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae aliquid dolores officiis neque. Voluptatem quod nemo, totam iste atque id aspernatur porro laborum, non quo, pariatur nobis natus consectetur?</p>
                            <p className='text-gray-800 py-1'>Tools used</p>
                            <p className='text-gray-800 py-1'>Photoshop</p>
                            <p className='text-gray-800 py-1'>Illustrator</p>
                            <p className='text-gray-800 py-1'>Figma</p>
                        </div>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-300'>
                            <img className='mx-auto' src={logoConsulting} alt="" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                            <p className='py-4 text-teal-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae aliquid dolores officiis neque. Voluptatem quod nemo, totam iste atque id aspernatur porro laborum, non quo, pariatur nobis natus consectetur?</p>
                            <p className='text-gray-800 py-1'>Tools used</p>
                            <p className='text-gray-800 py-1'>Photoshop</p>
                            <p className='text-gray-800 py-1'>Illustrator</p>
                            <p className='text-gray-800 py-1'>Figma</p>
                        </div>
                        <div className='text-center shadow-2xl p-10 rounded-xl my-10 md:w-72 lg:w-96 dark:bg-slate-100'>
                            <img className='mx-auto' src={logoDesign} alt="" />
                            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                            <p className='py-4 text-teal-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae aliquid dolores officiis neque. Voluptatem quod nemo, totam iste atque id aspernatur porro laborum, non quo, pariatur nobis natus consectetur?</p>
                            <p className='text-gray-800 py-1'>Tools used</p>
                            <p className='text-gray-800 py-1'>Photoshop</p>
                            <p className='text-gray-800 py-1'>Illustrator</p>
                            <p className='text-gray-800 py-1'>Figma</p>
                        </div>
                    </div>
                </section>
                <div className='text-5xl flex justify-center gap-16 py-3'>
                        <img src={logoFacebook} alt="logo-redes" width={50} height={50}  className={'dark:border-2 border-teal-300 rounded-full'}/>

                        <img src={logoGithub} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-teal-300 rounded-full'}/>

                        <img src={logoLinkedind} alt="logo-redes" width={50} height={50} className={'dark:border-2 border-teal-300 rounded-full'}/>
                 </div>
                

            </main>

        </div>
    )
}