import React, { useState } from "react"
import CroutBodyDescription from "./CroutBodyDescription"
import CroutBodyExecution from "./CroutBodyExecution"
import CroutBodyResult from "./CroutBodyResult"
import validateMatrix from "../../../utilities/validateMatrix"
import validateVector from "../../../utilities/validateVector"
import crout from "../../../utilities/methods/functions/Crout"
import transformMatrix from "../../../utilities/transformMatrix"
import Graph from "../../graph"
import { isNull } from "mathjs"
const SimpleLuBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        A: '4,-1,0,3;1,15.5,3,8;0,-1.3,-4,1.1;14,5,-2,30',
        b: '1;1;1;1'
    })

    // Método para cambiar el valor de los campos del formulario
    const handleChangeDataForm = (e) => {
        setDataForm({ ...dataForm, [`${e.target.id}`]: e.target.value })
    }

    //Se crea el estado que guardará los errores ocurridos durante la ejecución del método
    const [logs, setLogs] = useState([])

    //Se crea el estado para validar si mostrar los resultados siempre y cuando se haya ejecutado el método
    const [isRun, setIsRun] = useState(false);

    //Se crea el estado para guardar la lista de matrices resultantes
    const [matrixList,setMatrixList] = useState([]);
    //Se crea el estado para guardar el vector x resultantes
    const [vectorResult,setVectorResult] = useState([]);

    const validateData = ({ A, b }) => {
        const { message, n } = validateMatrix(A);
        const logsAux = [];
        let flag = true;

        if (!(message === 'Success')) {
            logsAux.push({ type: 'Error', text: message })
            flag = false;
        }
        const validateVectorResult = validateVector(b, n);

        if (message === 'Success' && !(validateVectorResult === 'Success')) {
            logsAux.push({ type: 'Error', text: validateVectorResult })
            flag = false;
        }
        setLogs(logsAux);
        return flag;
    }


    //Función para correr el método
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });

        if(validateDataResult){
            const matrixTransformered = transformMatrix(dataForm.A);
            const vectorTransformered = transformMatrix(dataForm.b);
            const {x, stages,logs} = crout(matrixTransformered,vectorTransformered);

            //Falta setear logs
            setLogs(logs);
            if(stages.length >0 && !isNull(x)){
                setMatrixList(stages);
                setVectorResult(x);
                setIsRun(true);
            }
        }else{
            setIsRun(false);
        }
    }


    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            A: '4,-1,0,3;1,15.5,3,8;0,-1.3,-4,1.1;14,5,-2,30',
            b: '1;1;1;1'
        })
        setIsRun(false);
        setLogs([]);
    }



    return (
        <div className="container">
            <h1 className="text-center">Crout</h1>
            <CroutBodyDescription />
            <CroutBodyExecution run={run} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} clear={clear}/>
            {isRun?<CroutBodyResult matrixList={matrixList} vectorResult={vectorResult}/>:null}
            <Graph />
        </div>
    )
}

export default SimpleLuBody;