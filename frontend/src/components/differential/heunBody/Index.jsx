import React, { useState } from "react";
import HeunBodyDescription from "./HeunBodyDescription";
import HeunBodyExecution from "./HeunBodyExecution"
import HeunBodyResult from "./HeunBodyResult"
import Graph from "../../graph"
import validateFunction from "../../../utilities/validateFunctionxy";
import Heun from  "../../../utilities/methods/functions/Heun"
const HeunBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        f: '2x-3y',
        x: 1,
        y: 6,
        h: 0.5,
        n: 4
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
    const validateData = ({ f, x, y, h,n}) => {
        let flag = true;
        const logsAux = [];
        if (x === '' || isNaN(x)) {
            logsAux.push({ type: 'Error', text: 'x must be a valid number' })
            flag = false;
        }
        if (y === '' || isNaN(y)) {
            logsAux.push({ type: 'Error', text: 'y must be a valid number' })
            flag = false;
        }
        if (h === '' || isNaN(h)) {
            logsAux.push({ type: 'Error', text: 'h must be a valid number' })
            flag = false;
        }
        //Validate n
        if (n === '' || isNaN(n)) {
            logsAux.push({ type: 'Error', text: 'n must be a valid number' });
            flag = false;
        }

        if (!isNaN(n) && parseFloat(n) <= 0) {
            logsAux.push({ type: 'Error', text: "n must be greater than 0" });
            flag = false;
        }
        if (!isNaN(n) && parseFloat(n) > 0 && (parseFloat(n) - Math.trunc(n)) > 0) {
            logsAux.push({ type: 'Error', text: "n must be integer" });
            flag = false;
        }
        if (f === '' || !isNaN(x) && !isNaN(y) && !validateFunction(f, x,y)) {
            logsAux.push({ type: 'Error', text: 'f(x,y) must be a valid function' });
            flag = false;
        }
        setLogs(logsAux)
        return flag;
    }
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        if (validateDataResult) {
            const{matrix,counter} = Heun(dataForm.f,parseFloat(dataForm.x),parseFloat(dataForm.y),parseFloat(dataForm.h),parseFloat(dataForm.n))
            if(counter>0){
                setColumns(matrix[0]);
                setRows(matrix.slice(1, counter+1));
                // setLogs(logs);
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
            f: '2x-3y',
            x: 1,
            y: 6,
            h: 0.5,
            n: 4
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }
    return (
        <div className="container">
            <h1 className="text-center">Heun</h1>
            <HeunBodyDescription />
            <HeunBodyExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} />
            {isRun ? <HeunBodyResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
            <Graph/>
        </div>

    )
}

export default HeunBody;