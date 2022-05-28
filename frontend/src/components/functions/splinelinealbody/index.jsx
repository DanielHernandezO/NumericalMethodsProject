import React, { useState } from "react";
import SplineLinealDescription from "./SplineLinealDescription";
import SplineLinealExecution from "./SplineLinealExecution";
import trazlinmethod from "../../../utilities/methods/functions/trazlin";
import SplineLinealResult from "./SplineLinealResult"
const SplineLinealBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        x: [-1,0,3,4],
        y: [15.5,3,8,1]
    })

    //Se crea el estado que guardará los errores ocurridos durante la ejecución del método
    const [logs, setLogs] = useState([])

    //Se crea el estado para validar si mostrar los resultados siempre y cuando se haya ejecutado el método
    const [isRun, setIsRun] = useState(false);

    //Se crean los estados para guardar las filas, columnas, e informacion adicional resultantes del método
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const [extraInfo, setExtraInfo] = useState({});

    // Método para cambiar el valor de los campos del formulario
    const handleChangeDataForm = (e) => {
        setDataForm({ ...dataForm, [`${e.target.id}`]: e.target.value })
    }

    //Método para validar los datos que entran desde el formulario
    const validateData = ({ x,y}) => {
        //Validate input

        return true;
    }

    //Función para correr el método
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        if (validateDataResult) {
            const { matrix, x1, logs } = trazlinmethod(dataForm.x, parseFloat(dataForm.y))
            setColumns(matrix[0]);
            setRows(matrix.slice(1, matrix.length));
            setExtraInfo({Raiz: x1});
            setLogs(logs);
            setIsRun(true);
        } else {
            setLogs([...logs, { type: 'Error', text: 'The data input is invalid' }])
        }

    }

    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            x: [0,0,0,0],
            y: [0,0,0,0]
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }

    return (
        <div className="container">
            <h1 className="text-center">Lineal Spline</h1>
            <SplineLinealDescription />
            <SplineLinealExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} />
            {isRun ? <SplineLinealResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
        </div>

    )
}

export default SplineLinealBody;