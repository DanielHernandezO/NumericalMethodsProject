import React, { useEffect, useState } from "react";
import IncrementalSearchBodyDescription from "./incrementalSearchBodyDescription";
import IncrementalSearchBodyExecution from "./IncrementalSearchBodyExecution";
import incrementalSearchMethod from "../../../utilities/methods/functions/IncrementalSearch";
import IncrementalSearchBodyResult from "./incrementalSearchBodyResult"
import validateFunction from "../../../utilities/validateFunction";
import Graph from "../../graph"
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
        let flag = true;
        const logsAux = [];
        //Validate x0
        if (x0 === '' || isNaN(x0)) {
            logsAux.push({ type: 'Error', text: 'x0 must be a valid number' })
            flag = false;
        }
        //Validate fx
        if (fx === '' || (!isNaN(x0) && !validateFunction(fx, x0))) {
            logsAux.push({ type: 'Error', text: 'f(x) must be a valid function' });
            flag = false;
        }
        //Validate delta
        if (isNaN(delta)) {
            logsAux.push({ type: 'Error', text: 'niter must be a valid number' });
            flag = false;
        }

        //Validate niter
        if (niter === '' || isNaN(niter)) {
            logsAux.push({ type: 'Error', text: 'niter must be a valid number' });
            flag = false;
        }
        if (!isNaN(niter) && parseFloat(niter) <= 0) {
            logsAux.push({ type: 'Error', text: "niter must be greater than 0" });
            flag = false;
        }
        if (!isNaN(niter) && parseFloat(niter) > 0 && (parseFloat(niter) - Math.trunc(niter)) > 0) {
            logsAux.push({ type: 'Error', text: "niter must be integer" });
            flag = false;
        }
        setLogs(logsAux);
        return flag;
    }

    //Función para correr el método
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        if (validateDataResult) {
            const { matrix, counter, logs } = incrementalSearchMethod(dataForm.fx, parseFloat(dataForm.x0), parseFloat(dataForm.delta), parseFloat(dataForm.niter))
            if(counter>0){
                setColumns(matrix[0]);
                setRows(matrix.slice(1, counter+1));
                setLogs(logs);
                setIsRun(true);
            }else{
                setLogs(logs);
                setColumns([]);
                setRows([]);
                setIsRun(true);
            }
        } else {
            setIsRun(false);
        }

    }

    useEffect(()=>{
        if(isRun){
            document.getElementById('result_incremental_search').scrollIntoView()
        }
    },[isRun])

    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            fx: 'x-1',
            x0: -2,
            delta: 5,
            niter: 1
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
            <Graph/>
        </div>

    )
}

export default IncrementalSearchBody;