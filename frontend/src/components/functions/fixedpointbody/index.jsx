import React, { useState } from "react";
import fixedpoint from "../../../utilities/methods/functions/fixedpoint";
import FixedpointDescription from "./fixedpointDescription";
import FixedpointExecution from "./fixedpointExecution";
import FixedpointResult from "./fixedpointResult";
import validateFunction from "../../../utilities/validateFunction";
import Graph from "../../graph";
const FixedpointBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        f: 'log((sin(x)^2)+1)-x-1/2',
        g: 'log((sin(x)^2)+1)-1/2',
        x0: -0.5,
        niter: 100,
        tol: 10e-7
    })

    //Se crea el estado que guardará los errores ocurridos durante la ejecución del método
    const [logs, setLogs] = useState([])

    //Se crea el estado para validar si mostrar los resultados siempre y cuando se haya ejecutado el método
    const [isRun, setIsRun] = useState(false);

    //Se crean los estados para guardar las filas, columnas, e informacion adicional resultantes del método
    const [columns, setColumns] = useState(['i','x0', 'gx1', 'fx1', 'error']);
    const [rows, setRows] = useState([]);
    const [extraInfo, setExtraInfo] = useState({});

    // Método para cambiar el valor de los campos del formulario
    const handleChangeDataForm = (e) => {
        setDataForm({ ...dataForm, [`${e.target.id}`]: e.target.value })
    }

    //Método para validar los datos que entran desde el formulario
    const validateData = ({ f, g, x0, niter, tol }) => {
        let flag = true;
        const logsAux = [];
        //Validate x0
        if (isNaN(x0)) {
            logsAux.push({ type: 'Error', text: 'x0 must be a valid number' })
            flag = false;
        }
        //Validate fx
        if (!isNaN(x0) && !validateFunction(g, x0)) {
            logsAux.push({ type: 'Error', text: 'f(x) must be a valid function' });
            flag = false;
        }
        //Validate f1x
        if (!isNaN(x0) && !validateFunction(f, x0)) {
            logsAux.push({ type: 'Error', text: "f'(x) must be a valid function" });
            flag = false;
        }
        //Validate f2x
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
        if (isNaN(tol)) {
            logsAux.push({ type: 'Error', text: 'tol must be a valid number' });
            flag = false;
        }
        setLogs(logsAux);
        return flag;
    }

    //Función para correr el método
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        const { f, g, x0, niter, tol } = dataForm;
        
        if (validateDataResult) {
            
            let { iterations,logs} = fixedpoint(f, g, parseFloat(x0), parseFloat(tol), parseFloat(niter))
            console.log(iterations);
            if(iterations[iterations.length-1][4] > tol){
                logs = [{type: 'Error', text: "The method can not get to the tolerance wanted with the amount of iterations given"}];
                setLogs(logs);
            }
            else if (iterations[iterations.length-1][4] < tol) {
                console.log(logs);
                setLogs(logs);
                setExtraInfo({x0: iterations[iterations.length-1][1]});
                setRows(iterations);
                setIsRun(true);
            }
        } else {
            setIsRun(false);
        }

    }

    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            f: 'log((sin(x)^2)+1)-x-1/2',
            g: 'log((sin(x)^2)+1)-1/2',
            x0: -0.5,
            niter: 100,
            tol: 10e-7
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }


    return (
        <div className="container">
            <h1 className="text-center">Fixed Point</h1>
            <FixedpointDescription />
            <FixedpointExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} />
            {isRun ? <FixedpointResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
            <Graph/>
        </div>
    )
}

export default FixedpointBody;