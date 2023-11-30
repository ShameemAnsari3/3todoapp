import React, { useState } from 'react'

// now only need to do go to your github website and create a new repo and follow these steps to uploade your react file on github website

// go to official website documentation https://create-react-app.dev/docs/deployment/

// now open treminal and run these commands 

// when u run this command its crate new file which name has build and it's have all files to run you code 
// 1 npm run build  


// initilise you folder for gitwebsite 
// now go to package.json on top add this manualy "homepage": "https:ShameemAnsari3.github.io/MyToDoApp",
// when u run npm deploy  output is terminal The project was built assuming it is hosted at /ShameemAnsari3.github.io/MyToDoApp/.
// You can control this with the homepage field in your package.json.
// 2 git init 

// after run commend 3 Add the following scripts in your package.json: inside script { "predeploy": "npm run build", "deploy": "gh-pages -d build", }
// and run 
// 3 npm install --save gh-pages

// run this command add new file gittgnore now go to girignor and see # dependencies /node_modules its means not updoad node module git ignore this file 
// 4 num run build

// 5 npm run deploy

export default function Todo() {

    // 1 initial value is blank
    const [activity, setActivity]=useState("")

    // 3 inital valuse is blank array
    const [listactivity, setListActivity]=useState([])

    // 10.1 making todo index value to perform edti operation initial value is null & blank & undifined 
    const [index,setIndex]=useState(null)

    // 4 making a function button click add toto data
    function addTodo(){

        // // in this code rendring problem
        // setListActivity([...listactivity, activity])
        // //  will not render immediately 2X button click work 
        // console.log(listactivity); 

        //making a Aro () => function setListActivity
        setListActivity(()=>{
            const result = [...listactivity,activity];
            setActivity("")
            console.log(result)
            return result
        })


    }


    // 6

    function handleRemove(index){
        let res = listactivity.filter((Element,i)=>{
            return i!=index
        })
        setListActivity(res)
    }


    // try to Enter button click submit exp 
   // document.getElementById("valueInput").addEventListener("keypress", e =>{
    //     if(e.keyCode ===13){
    //         alert("enter key press")
    //     }
    // })



    // 8
    function removeAll(){
        setListActivity('')
    }


    // 10
    function editData(item,index){
        setIndex(index);
        setActivity(item)
    }

    // 12
    function updateTod(){
        const temp = [...listactivity];
        temp[index]=activity;
        setListActivity(temp)
        setActivity("")
    }

  return (
    <div style={{background:"lightblue"}}>

        {/* 2 */}
        <h1>TODO LIST</h1>

        <div>
            <input type='text' name='activity' id='valueInput' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
            <button type='button' onClick={addTodo}>Add TODO</button>
            {/* 11 */}
            <button type='submit' onClick={updateTod}>Update Data</button>
        </div>

        {/* 5 */}
        {
            listactivity!=[] && listactivity.map((item,index)=>{
                return <>
                    <p key={index} editcontent='true'>{item}</p>
                    <button onClick={()=>handleRemove(index)}>Remove</button>

                    {/* 9 */}
                    {/* <span style={{color:"blue"}} onClick={()=>editData(item,index)}>Edit todo</span> */}
                    <button onClick={()=>editData(item,index)}>Edit todo</button>
                </>
            })
        }


        {/* 7 */}
            <div>
            {/*  empty jsx { inside ternery operator if data value greater than 1 then show remoe all button    }  */}
                {
                    listactivity.length>=2?<button onClick={removeAll}>Remov All</button>:""
                }


                
            
            </div>

      
    </div>
  )
}



