import React, { useState } from "react";
import CompoundTrapezeBodyDescription from "./compoundTrapezeBodyDescription";
import CompoundTrapezeExecution from "./compoundTrapezeBodyExecution";
import CompoundTrapezeBodyResult from "./compoundTrapezeBodyResult";
import compoundTrapeze from "../../../utilities/methods/functions/compoundTrapeze"
import validateFunction from "../../../utilities/validateFunction"
import Graph from "../../graph";
const CompoundTrapezeBody = () => {
    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        fx: 'x^2 + x + 2',
        a: 1,
        b:5,
        n: 12
    })

    //Se crea el estado que guardará los errores ocurridos durante la ejecución del método
    const [logs, setLogs] = useState([])

    //Se crea el estado para validar si mostrar los resultados siempre y cuando se haya ejecutado el método
    const [isRun, setIsRun] = useState(false);

    //Se crean los estados para guardar las filas, columnas, e informacion adicional resultantes del método
    const [columns, setColumns] = useState(['i', 'xi', 'fxi','A']);
    const [rows, setRows] = useState([]);
    const [extraInfo, setExtraInfo] = useState({});

    // Método para cambiar el valor de los campos del formulario
    const handleChangeDataForm = (e) => {
        setDataForm({ ...dataForm, [`${e.target.id}`]: e.target.value })
    }

    //Método para validar los datos que entran desde el formulario
    const validateData = ({ fx, a, b, n }) => {
        let flag = true;
        const logsAux = [];
        //Validate a
        if (isNaN(a)) {
            logsAux.push({ type: 'Error', text: 'a must be a valid number' })
            flag = false;
        }
        //Validate b
        if (isNaN(b)) {
            logsAux.push({ type: 'Error', text: 'b must be a valid number' })
            flag = false;
        }
        //Validate fx
        if (!isNaN(a) && !validateFunction(fx, a)) {
            logsAux.push({ type: 'Error', text: 'f(x) must be a valid function' });
            flag = false;
        }

        //Validate n
        if (isNaN(n)) {
            logsAux.push({ type: 'Error', text: 'niter must be a valid number' });
            flag = false;
        }

        if (!isNaN(n) && parseFloat(n) <= 0) {
            logsAux.push({ type: 'Error', text: "niter must be greater than 0" });
            flag = false;
        }
        if (!isNaN(n) && parseFloat(n) > 0 && (parseFloat(n) - Math.trunc(n)) > 0) {
            logsAux.push({ type: 'Error', text: "niter must be integer" });
            flag = false;
        }

        setLogs(logsAux);
        return flag;
    }

    //Función para correr el método
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        const { fx, a, b, n } = dataForm;
        if (validateDataResult) {
            const { iterations, A } = compoundTrapeze(parseFloat(a), parseFloat(b),fx, parseFloat(n))
            
            setLogs([{
                type: 'Success',
                text: 'We have found an approximation of the integral of the function according to the given n: '+ A
            }]);

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
            fx: 'x^2 + x + 2',
            a: 1,
            b:5,
            n: 12
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }



    return (
        <div className="container">
            <h1 className="text-center">Compound Trapeze</h1>
            <CompoundTrapezeBodyDescription />
            <CompoundTrapezeExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={ handleChangeDataForm} logs={logs} />
            {isRun?<CompoundTrapezeBodyResult columns={columns} rows={rows} extraInfo={extraInfo}/>:null }
            <Graph/>
        </div>
    )
}

export default CompoundTrapezeBody;