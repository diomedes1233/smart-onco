import React from 'react'

const Login = () => {
    return (
        <>
            <form className='containerLoginInput'>
            

               <h6>INICIAR SESIÓN</h6>

                <div className='textlogin'><label htmlFor="">Correo</label></div>
                <input
                    type="text"
                    placeholder='Usuario'
                    
                />
                <div className='textlogin'><label htmlFor="">Contraseña</label></div>
                <input
                    type="pasword"
                    placeholder='Contraseña'
                />
                <p> <input type="checkbox" /> ¿Olvidaste tu contraseña?</p>

                <button className='button' type="submit" name="button">LOGIN</button>
            </form>
        </>
    )
}

export default Login
