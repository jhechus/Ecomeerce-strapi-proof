import { Form } from 'semantic-ui-react';  // Componentes de formulario de Semantic UI React
import { useFormik } from 'formik';  // Hook de Formik para la gestión de formularios
import { useRouter } from 'next/router';  // Hook de Next.js para la gestión de la navegación
import { Auth } from '@/api';  // Clase de autenticación desde el módulo API personalizado
import { initialValues, validationSchema } from './RegisterForm.form';  // Funciones para valores iniciales y esquema de validación

// Instancia de la clase de autenticación
const authCtrl = new Auth();

// Componente principal del formulario de registro
export function RegisterForm() {
  const router = useRouter();
    
  // Hook de Formik para gestionar el estado y la lógica del formulario
  const formik = useFormik({
    // Valores iniciales y esquema de validación obtenidos desde RegisterForm.form
    initialValues: initialValues(),   
    validationSchema: validationSchema(),
    validateOnChange: false, // Deshabilita la validación en cada cambio para mejorar el rendimiento

    // Función que se ejecuta al enviar el formulario
    onSubmit: async (formValue) => {
      try{
        await authCtrl.register(formValue)
        router.push("/join/sign-in") // Redirige al usuario a la página de inicio de sesión después del registro exitoso
      }catch(error){
        console.error(error) // Manejo de errores: muestra el error en la consola
      }
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths='equal'>
            <Form.Input 
              name='email' 
              type='text' 
              placeholder='Correo electronico' 
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
            />
            <Form.Input 
              name='username' 
              type='text' 
              placeholder='Nombre de Usuario'
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.errors.username} 
            /> 
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input 
            name='name' 
            type='text' 
            placeholder='Nombre y Apellido' 
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <Form.Input 
           name='password' 
           type='password' 
           placeholder='Contraseña' 
           value={formik.values.password}
           onChange={formik.handleChange}
           error={formik.errors.password}
          />
        </Form.Group>

        <Form.Button type='submit' fluid loading={formik.isSubmitting}>
          Registrarse
        </Form.Button>
    </Form>
  )
}
