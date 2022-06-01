import React,{ useState } from "react";
import JacobiBodyDescription from "./jacobiBodyDescription"
import JacobiBodyExecution from "./jacobiBodyExecution";
import JacobiBodyResult from "./jacobiBodyResult";
import validateVector from "../../../utilities/validateVector";
import validateMatriz from "../../../utilities/validateMatrix";
import jacobi from "../../../utilities/methods/functions/jacobi";
import transformMatrix from "../../../utilities/transformMatrix";
const JacobiBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        A: '4,-1,0,3;1,15.5,3,8;0,-1.3,-4,1.1;14,5,-2,30',
        b: '1;1;1;1',
        x0: '0;0;0;0',
        niter: 100,
        tol: 10e-7
    })

    // Método para cambiar el valor de los campos del formulario
    const handleChangeDataForm = (e) => {
        setDataForm({ ...dataForm, [`${e.target.id}`]: e.target.value })
    }

    //Se crea el estado que guardará los errores ocurridos durante la ejecución del método
    const [logs, setLogs] = useState([])

    //Se crea el estado para validar si mostrar los resultados siempre y cuando se haya ejecutado el método
    const [isRun, setIsRun] = useState(false);

    //Se crean los estados para guardar las filas, columnas, e informacion adicional resultantes del método
    const [columns, setColumns] = useState(['i', '', '', '','Error']);
    const [rows, setRows] = useState([]);
    const [extraInfo, setExtraInfo] = useState({});

    //Se crea el estado para guardar la lista de matrices resultantes
    const [matrixList,setMatrixList] = useState([]);
    //Se crea el estado para guardar el vector x resultantes
    const [vectorResult,setVectorResult] = useState([]);


    const validateData = ({ A, b, x0, niter, tol}) => {
        const { message, n } = validateMatriz(A);
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

        const validateVectorxResult = validateVector(x0, n);

        if (message === 'Success' && !(validateVectorxResult === 'Success')) {
            logsAux.push({ type: 'Error', text: validateVectorxResult })
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
        if(validateDataResult){
        const matrixTransformered = transformMatrix(dataForm.A);
        const vectorTransformered = dataForm.b.split(';');
        const vectorxTransformed = dataForm.x0.split(';');
        const {T,C,re,iteration, logs, x} = jacobi(matrixTransformered,vectorTransformered,vectorxTransformed, parseFloat(dataForm.niter),parseFloat(dataForm.tol))
        
        setLogs(logs);
        if(iteration.length > 0){
            setMatrixList([{
                title: `T`,
                matrix: T
            }])
            setVectorResult(x)
            setExtraInfo({
                C,
                re
            })
            setRows(iteration);
            setIsRun(true);
        }else{
            setIsRun(false);
        }
        
    
        }else{
            setIsRun(true);
        }
        
    }


    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            A: '4,-1,0,3;1,15.5,3,8;0,-1.3,-4,1.1;14,5,-2,30',
            b: '1;1;1;1',
            x0: '0;0;0;0',
            niter: 100,
            tol: 10e-7
        })
        setIsRun(false);
        setLogs([]);
    }
    
    return (
        <div className="container">
            <h1 className="text-center">Jacobi</h1>
            <JacobiBodyDescription/>
            <JacobiBodyExecution run={run} clear={clear} handleChangeDataForm={handleChangeDataForm} dataForm={dataForm} logs={logs}/>
            {isRun?<JacobiBodyResult columns={columns} rows={rows} extraInfo={extraInfo} matrixList={matrixList} vectorResult={vectorResult}/>:null}
        </div>
    )
}
export default JacobiBody;