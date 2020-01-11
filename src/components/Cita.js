import React,{Component} from 'react'
import PropTypes from 'prop-types'
class Cita extends Component {
    eliminarCita = () => {
        this.props.borrarCita( this.props.info.id )
    }
    render() {
        const {fecha, hora, nombreMascota, propietarioMascota, sintomas} = this.props.info
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">
                        { nombreMascota }
                    </h3>
                    <p className="card-text">
                        <span>Nombre del dueño: </span> { propietarioMascota }
                    </p>
                    <p className="card-text">
                        <span>Fecha: </span> { fecha }
                    </p>
                    <p className="card-text">
                        <span>Hora: </span> { hora }
                    </p>
                    <p className="card-text">
                        <span>Sintomas: </span>
                    </p>
                    <p className="card-text">
                        { sintomas }
                    </p>
                    <button onClick={this.eliminarCita} className="btn btn-danger">
                        Borrar &times
                    </button>
                </div>
            </div>
        )
    }
}
Cita.propTypes = {
    info: PropTypes.object.isRequired,
    borrarCita: PropTypes.func.isRequired
}
export default Cita
