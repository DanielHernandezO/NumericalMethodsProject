import React, {useEffect, useState} from "react"
import FalsepositionBodyDescription from "./falsepositionBodyDescription";
import FalsepositionBodyExecution from "./falsepositionBodyExecution";
import FalsepositionBodyResult from "./falsepositionBodyResult";
import validateFunction from "../../../utilities/validateFunction";
import falseposition from "../../../utilities/methods/functions/falseposition";
import Graph from "../../graph";
const FalsepositionBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        fx: 'log((sin(x)^2) + 1) - (1/2)',
        x0: 0,
        x1: 1,
        tol: 10e-7,
        niter : 100
    })

    //Se crea el estado que guardará los errores ocurridos durante la ejecución del método
    const [logs, setLogs] = useState([])

    //Se crea el estado para validar si mostrar los resultados siempre y cuando se haya ejecutado el método
    const [isRun, setIsRun] = useState(false);

    //Se crean los estados para guardar las filas, columnas, e informacion adicional resultantes del método
    const [columns, setColumns] = useState(['i','x0','xm','x1','f(xm)','error']);
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
        if (x0 === '' || isNaN(x0)) {
            logsAux.push({ type: 'Error', text: 'x0 must be a valid number' })
            flag = false;
        }
        //Validate x1
        if (x1 === '' || isNaN(x1)) {
            logsAux.push({ type: 'Error', text: 'x1 must be a valid number' })
            flag = false;
        }
        //Validate fx
        if (fx === '' || (!isNaN(x0) && !validateFunction(fx, x0) && !isNaN(x1) && !validateFunction(fx, x1))) {
            logsAux.push({ type: 'Error', text: 'f(x) must be a valid function' });
            flag = false;
        }

        //Validate niter
        if (niter === '' && isNaN(niter)) {
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
        const { fx, x0,x1, niter, tol } = dataForm;
        if (validateDataResult) {
            const { iterations, logs } = falseposition(fx, parseFloat(x0),parseFloat(x1), parseFloat(tol), parseFloat(niter))
            setLogs(logs);
            if (iterations.length > 0) {
                setRows(iterations);
                setIsRun(true);
            }
        } else {
            setIsRun(false);
        }
    }

    useEffect(()=>{
        if(isRun){
            document.getElementById('result_false_position').scrollIntoView()
        }
    },[isRun])

    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            fx: 'log((sin(x)^2) + 1) - (1/2)',
             x0: 0,
            x1: 1,
            tol: 10e-7,
            niter : 100
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }



    return (
        <div className="container">
            <h1 className="text-center">false position</h1>
            <FalsepositionBodyDescription />
            <FalsepositionBodyExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs}/>
            {isRun ? <FalsepositionBodyResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
            <Graph/>
        </div>
    )
}

export default FalsepositionBody;