import React, { useState } from "react";
import TrisectionBodyDescription from "./TrisectionBodyDescription";
import TrisectionBodyExecution from "./TrisectionBodyExecution"
import TrisectionBodyResult from "./TrisectionBodyResult"
import Graph from "../../graph"
import validateFunction from "../../../utilities/validateFunction";
import trisection from  "../../../utilities/methods/functions/trisection"
const TrisectionBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        fx: 'x-1',
        left: 0,
        right: 4,
        tolerance: 0.00001,
        niter: 100
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
        if (!isNaN(tolerance) && tolerance<=0) {
            logsAux.push({ type: 'Error', text: 'tolerance must be greater than 0' });
            flag = false;
        }
        setLogs(logsAux);
        return flag;
    }
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        if (validateDataResult) {
            const{matrix,counter,logs} = trisection(dataForm.fx,parseFloat(dataForm.left),parseFloat(dataForm.right),parseFloat(dataForm.tolerance),parseFloat(dataForm.niter))
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

    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            fx: 'x-1',
            left: 0,
            right: 4,
            tolerance: 0.00001,
            niter: 100
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }
    return (
        <div className="container">
            <h1 className="text-center">Trisection</h1>
            <TrisectionBodyDescription />
            <TrisectionBodyExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} />
            {isRun ? <TrisectionBodyResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
            <Graph/>
        </div>

    )
}

export default TrisectionBody;