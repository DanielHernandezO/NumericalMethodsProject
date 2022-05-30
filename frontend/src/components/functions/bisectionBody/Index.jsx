import React, { useState } from "react";
import BisectionDescriptionBody from "./BisectionBodyDescription";
import BisectionBodyExecution from "./BisectionBodyExecution"
import BisectionBodyResult from "./BisectionBodyResult"
import Graph from "../../graph"
import validateFunction from "../../../utilities/validateFunction";
import bisection from  "../../../utilities/methods/functions/bisection"
const BisectionSearchBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        fx: 'x-1',
        left: 0,
        right: 0,
        tolerance: 0,
        niter: 0
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
    const validateData = ({ fx, left, right, tolerance,niter}) => {
        let flag = true;
        const logsAux = [];
        //Validate left
        if (isNaN(left)) {
            logsAux.push({ type: 'Error', text: 'left must be a valid number' })
            flag = false;
        }

        // validate right 
        if (isNaN(right)) {
            logsAux.push({ type: 'Error', text: 'right must be a valid number' })
            flag = false;
        }
        if (isNaN(right) && isNaN(left) && left>right) {
            logsAux.push({ type: 'Error', text: 'right must greater or equal than left' })
            flag = false;
        }
        //Validate fx
        if (!isNaN(left) && !validateFunction(fx, left)) {
            logsAux.push({ type: 'Error', text: 'f(x) must be a valid function' });
            flag = false;
        }

        //Validate niter
        if (isNaN(niter)) {
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
        //Validate tolerance
        if (isNaN(tolerance)) {
            logsAux.push({ type: 'Error', text: 'tolerance must be a valid number' });
            flag = false;
        }

        //Validate tolerance
        if (isNaN(tolerance) && tolerance) {
            logsAux.push({ type: 'Error', text: 'tolerance must be greater than 0' });
            flag = false;
        }
        setLogs(logsAux);
        return flag;
    }
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        if (validateDataResult) {
            const{matrix,counter,logs} = bisection(dataForm.fx,parseFloat(dataForm.left),parseFloat(dataForm.right),parseFloat(dataForm.tolerance),parseFloat(dataForm.niter))
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
            setLogs([...logs, { type: 'Error', text: 'The data input is invalid' }])
        }

    }

    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            fx: 'x-1',
            left: 0,
            right: 0,
            tolerance: 0,
            niter: 0
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }
    return (
        <div className="container">
            <h1 className="text-center">Bisection</h1>
            <BisectionDescriptionBody />
            <BisectionBodyExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} />
            {isRun ? <BisectionBodyResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
            <Graph/>
        </div>

    )
}

export default BisectionSearchBody;