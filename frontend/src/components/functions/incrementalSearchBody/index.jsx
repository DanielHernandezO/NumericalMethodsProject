import React, { useState } from "react";
import IncrementalSearchBodyDescription from "./incrementalSearchBodyDescription";
import IncrementalSearchBodyExecution from "./IncrementalSearchBodyExecution";
import incrementalSearchMethod from "../../../utilities/methods/functions/IncrementalSearch";
import IncrementalSearchBodyResult from "./incrementalSearchBodyResult"
const IncrementalSearchBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        fx: 'x-1',
        x0: -2,
        delta: 5,
        niter: 1
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
    const validateData = ({ fx, x0, delta, niter }) => {
        //Validate input

        return true;
    }

    //Función para correr el método
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        if (validateDataResult) {
            const { matrix, x1, logs } = incrementalSearchMethod(dataForm.fx, parseFloat(dataForm.x0), parseFloat(dataForm.delta), parseFloat(dataForm.niter))
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
            fx: '',
            x0: 0,
            delta: 0,
            niter: 10e-7
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }

    return (
        <div className="container">
            <h1 className="text-center">Incremental Search</h1>
            <IncrementalSearchBodyDescription />
            <IncrementalSearchBodyExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} />
            {isRun ? <IncrementalSearchBodyResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
        </div>

    )
}

export default IncrementalSearchBody;