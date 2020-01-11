import React,{Component} from 'react'
import Header from './Header'
import Formulario from './Formulario'
import ListaCitas from './ListaCitas'
class App extends Component {
    state = {
        citas: []
    }
    componentDidMount() {
        const citasLS = localStorage.getItem('citas')
        if (citasLS) {
            this.setState({
                citas: JSON.parse(citasLS)
            })
        }
    }
    componentDidUpdate() {
        //guarda los datos en el storage
        localStorage.setItem(
            'citas',
            JSON.stringify(this.state.citas)
        )
    }
    crearCita = (nuevaCita) => {
        //console.log(cita)
        //copia del state y hascemos como un push
        const citas = [...this.state.citas, nuevaCita]
        this.setState({
            citas
        })
    }
    borrarCita = (id) => {
        const citasActuales = [...this.state.citas]
        const citas = citasActuales.filter(cita => cita.id !== id)
        this.setState({
            citas
        })
    }
    render() {
        return (
            <div className="container">
                <Header 
                    title = 'Administrador de Pacientes de Veterinaria'
                />
                <div className="row">
                    <div className="col-md-6">
                        <Formulario 
                            crearCita = { this.crearCita }
                        />
                    </div>
                    <div className="col-md-6">
                        <ListaCitas 
                            citas = { this.state.citas }
                            borrarCita = { this.borrarCita }
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default App
