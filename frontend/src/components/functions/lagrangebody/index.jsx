import React, { useState } from "react";
import LagrangeDescription from "./LagrangeDescription";
import LagrangeExecution from "./LagrangeExecution";
import lagrangemethod from "../../../utilities/methods/functions/lagrange";
import LagrangeResult from "./LagrangeResult"
const LagrangeBody = () => {

    //Se crea el estado que guardara la info del formulario con sus valores iniciales
    const [dataForm, setDataForm] = useState({
        x: "-1,0,3,4",
        y: "15.5,3,8,1"
    })

    //Se crea el estado que guardará los errores ocurridos durante la ejecución del método
    let [logs, setLogs] = useState([])

    //Se crea el estado para validar si mostrar los resultados siempre y cuando se haya ejecutado el método
    const [isRun, setIsRun] = useState(false);

    //Se crean los estados para guardar las filas, columnas, e informacion adicional resultantes del método
    const [columns, setColumns] = useState(["Interpolating Polynomials",' ']);
    const [rows, setRows] = useState([]);
    const [extraInfo, setExtraInfo] = useState({});

    // Método para cambiar el valor de los campos del formulario
    const handleChangeDataForm = (e) => {
        setDataForm({ ...dataForm, [`${e.target.id}`]: e.target.value })
    }

    //Método para validar los datos que entran desde el formulario
    const validateData = ({ x,y}) => {
        //Validate input
        let newarr1 = x.split(",");
        const arrOfNum1 = newarr1.map(str => {
            return Number(str);
          });
        let i = 0;
        for (i=0; i < arrOfNum1.length; i++){// check if array value is false or NaN
            if (arrOfNum1[i] === false || Number.isNaN(arrOfNum1[i]) ) {
                var xcontainsnan = true;
            }}
        let newarr2 = y.split(",");
        const arrOfNum2 = newarr2.map(str => {
            return Number(str);
            });
        i = 0;
        for (i=0; i < arrOfNum2.length; i++){// check if array value is false or NaN
            if (arrOfNum2[i] === false || Number.isNaN(arrOfNum2[i]) ) {
                var ycontainsnan = true;
            }}

        if (xcontainsnan) {
            let message = { type: 'Error', text: "X must be a valid set of numbers"}
            logs = [message];
            return false;
        }
        if (ycontainsnan) {
            let message = { type: 'Error', text: "Y must be a valid set of numbers"}
            logs = [message];
            return false;
        }
        if (arrOfNum1.length <= 1){
            let message = { type: 'Error', text: "X needs to have atleast 2 numbers"}
            logs = [message];
            return false;
        }
        if (arrOfNum2.length <= 1){
            let message = { type: 'Error', text: "Y needs to have atleast 2 numbers"}
            logs = [message];
            return false;
        }
        if (arrOfNum2.length != arrOfNum1.length){
            let message = { type: 'Error', text: "Both X and Y have to be equally as long"}
            logs = [message];
            return false;
        }
        return true;
    }

    //Función para correr el método
    const run = () => {
        
        const validateDataResult = validateData({ ...dataForm });

        
        if (validateDataResult) {
            
            let newarr1 = dataForm.x.split(",");

            let newarr2 = dataForm.y.split(",");
            
            const arrOfNum1 = newarr1.map(str => {
                return Number(str);
              });
            const arrOfNum2 = newarr2.map(str => {
                return Number(str);
            });
            
            let { newarray, logs } = lagrangemethod(arrOfNum1,arrOfNum2)

            let message = { type: 'Success', text: "Correct Input"}
            console.log(newarray);
            var polynom = [];
            for (var i = 0; i < arrOfNum2.length; i++) {
                console.log(i);
                console.log(arrOfNum2.length);
                if (i == arrOfNum2.length-1){
                    polynom.push(arrOfNum2[i], "*L", i);   
                }else{
                    polynom.push(arrOfNum2[i], "*L", i, "+");
                }
                //Do something
            }
            logs = [message];
            setExtraInfo({Polynom: polynom});
            setRows(newarray);
            setLogs(logs); 
            setIsRun(true);
            
        }else{
            setLogs(logs);
        }

    }

    //Método para reiniciar los valores
    const clear = () => {
        setDataForm({
            x: [0,0,0,0],
            y: [0,0,0,0]
        })
        setIsRun(false);
        setLogs([]);
        setColumns([]);
        setRows([]);
        setExtraInfo({});
    }

    return (
        <div className="container">
            <h1 className="text-center">Lagrange</h1>
            <LagrangeDescription />
            <LagrangeExecution run={run} clear={clear} dataForm={dataForm} handleChangeDataForm={handleChangeDataForm} logs={logs} />
            {isRun ? <LagrangeResult columns={columns} rows={rows} extraInfo={extraInfo} /> : null}
        </div>

    )
}

export default LagrangeBody;