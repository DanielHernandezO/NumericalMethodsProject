import React,{ useState } from "react";
import TridiagonalBodyDescription from "./tridiagonalBodyDescription"
import TridiagonalBodyExecution from "./tridiagonalBodyExecution";
import TridiagonalBodyResult from "./tridiagonalBodyResult";
import validateVector from "../../../utilities/validateVector";
import validateMatriz from "../../../utilities/validateMatrix";
import tridiagonal from "../../../utilities/methods/functions/tridiagonal";
import transformMatrix from "../../../utilities/transformMatrix";
const TridiagonalBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        A: '0;4;1;2;2',
        b: '1;4;1;2;2',
        c: '4;1;2;2;0',
        d: '4;1;2;2;1'
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
    //const [columns, setColumns] = useState(['i', '', '', '','Error']);
    //const [rows, setRows] = useState([]);
    //const [extraInfo, setExtraInfo] = useState({});

    //Se crea el estado para guardar la lista de matrices resultantes
    const [matrixList,setMatrixList] = useState([]);
    //Se crea el estado para guardar el vector x resultantes
    const [vectorResult,setVectorResult] = useState([]);


    const validateData = ({ A, b, c, d}) => {
        const  message1  = validateVector(A,A.split(';').length);
        const  message2 = validateVector(b,A.split(';').length);
        const  message3 = validateVector(c,A.split(';').length);
        const message4 = validateVector(d,A.split(';').length);
        const logsAux = [];
        let flag = true;

        if (!(message1 === 'Success') && A.length > 0) {
            logsAux.push({ type: 'Error', text: message1 })
            flag = false;
        }
        if (!(message2 === 'Success')) {
            logsAux.push({ type: 'Error', text: message2 })
            flag = false;
        }
        if (!(message3 === 'Success')) {
            logsAux.push({ type: 'Error', text: message3 })
            flag = false;
        }
        if (!(message4 === 'Success')) {
            logsAux.push({ type: 'Error', text: message4 })
            flag = false;
        }
        
        setLogs(logsAux);
        return flag;
    }

    //Función para correr el método
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        if(validateDataResult){
        const vector1Transformered = dataForm.A.split(';');
        const vector2Transformered = dataForm.b.split(';');
        const vector3Transformered = dataForm.c.split(';');
        const vector4Transformered = dataForm.d.split(';');
        const {x,stages,logs} = tridiagonal(vector1Transformered,vector2Transformered,vector3Transformered,
        vector4Transformered);
        console.log(x);
        console.log(stages);
        setLogs(logs);
        if(stages.length > 0){
            setMatrixList(stages);
            setVectorResult(x);
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
            A: '4;1;2;2',
            b: '4;1;2;2',
            c: '4;1;2;2',
            d: '4;1;2;2'
        })
        setIsRun(false);
        setLogs([]);
    }
    
    return (
        <div className="container">
            <h1 className="text-center">triadiagonal</h1>
            <TridiagonalBodyDescription/>
            <TridiagonalBodyExecution run={run} clear={clear} handleChangeDataForm={handleChangeDataForm} dataForm={dataForm} logs={logs}/>
            {isRun?<TridiagonalBodyResult matrixList={matrixList} vectorResult={vectorResult}/>:null}
        </div>
    )
}
export default TridiagonalBody;