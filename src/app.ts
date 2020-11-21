import express, { Application, Request, Response, NextFunction}  from 'express'; 

const app: Application = express(); 

const add = (a:number, b:number):number => a+ b;

app.get('/', (req:Request, res:Response, next: NextFunction) => {
    console.log(add(4,4));
    
    res.send('Hi yasmin');
    next()
})

const PORT = process.env.PORT || 4000; 

app.listen(PORT, () => console.log(`App running on port ${PORT}`))