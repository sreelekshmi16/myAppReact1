import React from 'react';

const todolist = ({ todolist ,deleteHandler}) => {
    return (
        <div >
            <ul>
                {
                    todolist.map(
                        (list,id) => <li key={id}> {list} <button type="button" onClick={(event)=>{deleteHandler(event,list)}} >delete</button></li>
                    )
                }

                


                {/* <li> {todolist}</li> */}
            </ul>
        </div>


    );
}

export default todolist;