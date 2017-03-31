/**
 * Created by keilc on 31/03/2017.
 */
import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';

const port = 3000;
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

console.log(chalk.green('Starting app in dev mode...'));

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
        console.log(chalk.green('Server started on http://localhost:' + port));
    }
});