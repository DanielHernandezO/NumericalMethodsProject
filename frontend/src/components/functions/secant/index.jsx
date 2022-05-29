import React, { useState } from "react";
import secant from "../../../utilities/methods/functions/secant";
import SecantBodyDescription from "./secantBodyDescription";
import SecantBodyExecution from "./secantBodyExecution";
import SecantBodyResult from "./secantBodyResult";
import validateFunction from "../../../utilities/validateFunction";
import Graph from "../../graph";
const SecantBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        fx: 'log((sin(x))^2 + 1) - (1/2)',
        x0: 0.5,
        x1: 1,
        niter: 100,
        tol: 10e-7
    })

    //Se crea el estado que guardará los errores ocurridos durante la ejecución del método
    const [logs, setLogs] = useState([])

    //Se crea el estado para validar si mostrar los resultados siempre y cuando se haya ejecutado el método
    const [isRun, setIsRun] = useState(false);

    //Se crean los estados para guardar las filas, columnas, e informacion adicional resultantes del método
    const [columns, setColumns] = useState(['i', 'xi', 'f(xi)', 'E']);
    const [rows, setRows] = useState([]);
    const [extraInfo, setExtraInfo] = useState({});

    // Método para cambiar el valor de los campos del formulario
    const handleChangeDataForm = (e) => {
        setDataForm({ ...dataForm, [`${e.target.id}`]: e.target.value })
    }

    //Método para validar los datos que entran desde el formulario
    const validateData = ({ fx, x0, x1, niter, tol }) => {
        let flag = true;
        const logsAux = [];
        //Validate x0
        if (isNaN(x0)) {
            logsAux.push({ type: 'Error', text: 'x0 must be a valid number' })
            flag = false;
        }
        //Validate x1
        if (isNaN(x1)) {
            logsAux.push({ type: 'Error', text: 'x1 must be a valid number' })
            flag = false;
        }
        //Validate fx
        if (!isNaN(x0) && !validateFunction(fx, x0)) {
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
        const { fx, x0, x1, niter, tol } = dataForm;
        if (validateDataResult) {
            const { iterations, logs } = secant(fx, parseFloat(x0),parseFloat(x1),parseFloat(tol), parseFloat(niter))
            setLogs(logs);
            if (iterations.length > 0) {
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
            fx: 'log((sin(x))^2 + 1) - (1/2)',
            x0: 0.5,
            x1: 1,
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
            <h1 className="text-center">Secant</h1>
            <SecantBodyDescription />
            <SecantBodyExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} />
            {isRun ? <SecantBodyResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
            <Graph />
        </div>
    )
}

export default SecantBody;