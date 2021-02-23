'use strict'

// membuat response json
exports.succsess = ((values, res)=>{
    const data = {
        "status": 200,
        "error": null
        "data": values
    }

    res.json(data);
    res.end();
})