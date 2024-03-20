import { useForm } from "react-hook-form"

const Form = () => {

    const { register, handleSubmit } = useForm()

    const enviar = (datos) => {
        console.log(datos)
    }

    return (
        <div>

            <h4 className='m-3 mb-5 text-success'>Formulario de contacto</h4>

            <form className='d-flex justify-content-center flex-column align-items-start m-3' onSubmit={handleSubmit(enviar)}>
                <input className='mb-2' type='text' placeholder='Nombre Completo' {...register("Nombre Completo")} />
                <input className='mb-2' type='email' placeholder='ejemplo@ejemplo.com' {...register("email")} />
                <input className='mb-2' type='number' placeholder='XXX-XXXXXXX' {...register("Teléfono")} />
                <button className='mb-2 btn btn-success' type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Form
