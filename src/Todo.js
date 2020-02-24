import React from 'react';

const todo = props => {
    const { additem, input} = props;
    console.log(' ----- ', props);
    return (
        
            <div >
                <input type="text" value={input} onChange={additem} />
                <button type="button" onClick={props.additeminArray}>Add</button>

              
            </div>

        
    );
}

export default todo;