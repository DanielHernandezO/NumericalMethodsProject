import React,{ useState } from "react";
import VandermordeBodyDescription from "./vandermordeBodyDescription"
import VandermordeBodyExecution from "./vandermordeBodyExecution";
import VandermordeBodyResult from "./vandermordeBodyResult";
import validateVector from "../../../utilities/validateVector";
import validateMatriz from "../../../utilities/validateMatrix";
import vandermorde from "../../../utilities/methods/functions/vandermorde";
import transformMatrix from "../../../utilities/transformMatrix";
const VandermordeBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        xi: '-1;0;3;4',
        y: '15.5;3;8;1'
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
    const [extraInfo, setExtraInfo] = useState({});

    //Se crea el estado para guardar la lista de matrices resultantes
    const [matrixList,setMatrixList] = useState([]);
    //Se crea el estado para guardar el vector x resultantes
    const [vectorResult,setVectorResult] = useState([]);


    const validateData = ({ xi,y}) => {
        const  message1  = validateVector(xi,xi.split(';').length);
        const  message2 = validateVector(y,xi.split(';').length);
        const logsAux = [];
        let flag = true;

        if (!(message1 === 'Success') && xi.split(',').length > 0) {
            logsAux.push({ type: 'Error', text: message1 })
            flag = false;
        }
        if (!(message2 === 'Success')) {
            logsAux.push({ type: 'Error', text: message2 })
            flag = false;
        }
        
        setLogs(logsAux);
        return flag;
    }

    //Función para correr el método
    const run = () => {
        const validateDataResult = validateData({ ...dataForm });
        if(validateDataResult){
        const vector1Transformered = dataForm.xi.split(';');
        const vector2Transformered = dataForm.y.split(';');
        const {A,x,poli} = vandermorde(vector1Transformered,vector2Transformered);
        console.log(A);
        //console.log(stages);
        //setLogs(logs);
        if(x.length > 0){
            setMatrixList([{
            title: `Matrix of vandermorde`,
            matrix: A
        }]);
            setVectorResult(x);

            setExtraInfo({poli});
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
           xi: '-1;0;3;4',
            y: '15.5;3;8;1'
        })
        setIsRun(false);
        setLogs([]);
    }
    
    return (
        <div className="container">
            <h1 className="text-center">Vandermorde</h1>
            <VandermordeBodyDescription/>
            <VandermordeBodyExecution run={run} clear={clear} handleChangeDataForm={handleChangeDataForm} dataForm={dataForm} logs={logs}/>
            {isRun?<VandermordeBodyResult matrixList={matrixList} vectorResult={vectorResult} extraInfo={extraInfo}/>:null}
        </div>
    )
}
export default VandermordeBody;