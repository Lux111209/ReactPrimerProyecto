import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton.jsx'
import Alert from './components/Alert.jsx'
import Card from './components/Card.jsx'
import Spinner from './components/Spinner.jsx'
import Toast from './components/Toast.jsx'
import Badge from './components/Badge.jsx'
import Modal from './components/Modal.jsx'
import Progress from './components/Progress.jsx'
import Stack from './components/Stack.jsx'
import Check from './components/Note.jsx'
import Note from './components/Note.jsx'
import Icon from './components/Icon.jsx'
import Card2 from './components/Card2.jsx'
import List from './components/List.jsx'
import Place from './components/Placeholder.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola mundo</h1>

      <Boton 
      titulo ={"Boton 1"} />

      <Boton 
      titulo ={"Boton 2"} />

      <Alert
      titulo ={"¡Esto es una alerta!"}/>

      <Card
      nombre ={"Luz Gasparío"} 
      descripcion ={"App de React JS con Boostrap"}
      mas ={"Frameworks"}/>

      <br />

      <Spinner
      spin={"Loading..."}/>

      <br />

      <Toast
      btn={"Toast"}
      title={"Boostrap"}
      description={"11 mins ago"}
      saludo={"Hello world"}/>

      <Badge
      text={"New"}/>

      <Modal
      titulo={"Eliminar"}
      letra={"Eliminar"}
      info={"¿Estás seguro que deseas eliminarlo?"}
      x={"Cerrar"}
      cambios={"Guardar"}/>

      <br />
      <br />

      <Progress/>

      <br />

      <Stack
      uno={"Primero"}
      dos={"Segundo"}
      tres={"Tercero"}/>

      <br />

      <Note
      m1={"Well done!"}
      message1={"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}
      m2={"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."}
      />

      <Icon/>

      <Card2
      titulo={"sdfsdfklsadljs  JASOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON"}/>

      
     <List
      t1={"PRIMERO"}
      t2={"SEGUNDO"}
      t3={"TERCERO"}/>

      <Place/>
      </>
  )
}

export default App
