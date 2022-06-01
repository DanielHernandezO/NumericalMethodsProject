import React, { useState } from "react";
import EulerDescription from "./EulerDescription";
import EulerExecution from "./EulerExecution";
import eulermethod from "../../../utilities/methods/functions/euler";
import EulerResult from "./EulerResult";
import Graph from "../../graph";
import validateFunctionxy from "../../../utilities/validateFunctionxy";
const EulerBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        f: '0.1*sqrt(y)+0.4*x^2',
        x: 2,
        y: 4,
        h: 0.5
    })

    //Se crea el estado que guardará los errores ocurridos durante la ejecución del método
    let [logs, setLogs] = useState([])

    //Se crea el estado para validar si mostrar los resultados siempre y cuando se haya ejecutado el método
    const [isRun, setIsRun] = useState(false);

    //Se crean los estados para guardar las filas, columnas, e informacion adicional resultantes del método
    const [columns, setColumns] = useState(["x",'h']);
    const [rows, setRows] = useState([]);
    const [extraInfo, setExtraInfo] = useState({});

    // Método para cambiar el valor de los campos del formulario
    const handleChangeDataForm = (e) => {
        setDataForm({ ...dataForm, [`${e.target.id}`]: e.target.value })
    }

    //Método para validar los datos que entran desde el formulario
    const validateData = ({f,x,y}) => {
        //Validate input
        if (x > y){
            let message = { type: 'Error', text: "Y has to be greater than X"}
            logs = [message];
            return false;
        }
        if (!validateFunctionxy(f,x,y)){
            let message = { type: 'Error', text: "Invalid Function"}
            logs = [message];
            return false;
        }
        return true;
    }

    //Función para correr el método
    const run = () => {
        const {f} = dataForm;

        const validateDataResult = validateData({ ...dataForm });
        
        
        if (validateDataResult) {
           
            let { newarray, logs } = eulermethod(f,dataForm.x,dataForm.y,dataForm.y,dataForm.h)
            
            if(logs[0].type == "Success"){
                
                setRows(newarray);
                setLogs(logs);
                setIsRun(true);
            }
            else{
                setLogs(logs);
            }
        }else{
            setLogs(logs);
        }

    }

    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            f: '0.1*sqrt(y)+0.4*x^2',
            x: 2,
            y: 4,
            h: 0.5
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }

    return (
        <div className="container">
            <h1 className="text-center">Euler</h1>
            <EulerDescription />
            <EulerExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} />
            {isRun ? <EulerResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
            <Graph/>
        </div>

    )
}

export default EulerBody;