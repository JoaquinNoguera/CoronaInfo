const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors')
const connect = require('./db');
const Global = require('./global');
const Country = require('./country');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;


app.use(cors());
connect();

const consultGlobal = async () => {
    try{
        const responseGlobal = await fetch('https://covid19.mathdro.id/api/');
        const dataGlobal = await responseGlobal.json();
        const responseCountries = await fetch('https://covid19.mathdro.id/api/countries');
        const dataCountries = await responseCountries.json();
        countries = dataCountries.countries.map(t => {
            return {
                name: t.name,
                cod: t.iso3,
            }
        })
        dataGlobal.lastUpdate = dataGlobal.lastUpdate;
        const compare = new Date (Date.parse(dataGlobal.lastUpdate));
        compare.setHours(0,0,0,0);
        return  {
            lastUpdate: dataGlobal.lastUpdate,
            confirmed: dataGlobal.confirmed.value,
            recovered: dataGlobal.recovered.value,
            deaths: dataGlobal.deaths.value,
            compare: compare.getTime(),
            countries: [...countries]
        }
    }catch  (err){
        console.log(err);
    }
}

const updateGlobal = async(data) => {
        const response = await Global.findOne();
        if(!response) {
            const input = {
                countries: [...data.countries],
                days: [{
                    confirmed: data.confirmed,
                    recovered: data.recovered,
                    deaths: data.deaths,
                    compare: data.compare,
                    lastUpdate: data.lastUpdate,
                }]
            }
            const newGlobal = new Global(input);
            newGlobal.save();
        }else{
            const index = response.days.findIndex(day => day.compare === data.compare);
            if(index !== -1 ){
                response.days[index].confirmed = data.confirmed;
                response.days[index].recovered = data.recovered;
                response.days[index].deaths = data.deaths;
                response.days[index].compare = data.compare;
                response.days[index].lastUpdate = data.lastUpdate;
            }else{
                response.days.push({
                        confirmed: data.confirmed,
                        recovered: data.recovered,
                        deaths: data.deaths,
                        compare: data.compare,
                        lastUpdate: data.lastUpdate,
                    });
            }
            response.save();
        }

}

const consultCountry = async(country) => {
    try{
        const {name,cod} = country;
        const response = await fetch(`https://covid19.mathdro.id/api/countries/${cod}`);
        const data = await response.json();
        const compare = new Date (Date.parse(data.lastUpdate));
        compare.setHours(0,0,0,0);
        return  {
            name: name,
            cod: cod,
            lastUpdate: data.lastUpdate,
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
            compare: compare.getTime(),
        }
    }catch{
        return null;
    }

}   

const updateCountry = async(country) => {
    try{
    const {name, cod, lastUpdate, confirmed, recovered, deaths, compare} = country;
    const response = await Country.findOne({name});
    if(!response) {
        const input = {
            name: name,
            cod: cod,
            days: [{
                confirmed: confirmed,
                recovered: recovered,
                deaths: deaths,
                compare: compare,
                lastUpdate: lastUpdate,
            }]
        }
        const newCountry = new Country(input);
        newCountry.save();
    }else{
        const index = response.days.findIndex(day => day.compare === compare);
            if(index !== -1 ){
                response.days[index].confirmed = confirmed;
                response.days[index].recovered = recovered;
                response.days[index].deaths = deaths;
                response.days[index].compare = compare;
                response.days[index].lastUpdate = lastUpdate;
            }else{
                response.days.push({
                        confirmed: confirmed,
                        recovered: recovered,
                        deaths: deaths,
                        compare: compare,
                        lastUpdate: lastUpdate,
                    });
            }
            response.save();
    }
    }catch{
        return null;
    }
}



app.get('/', async function(_, res){
        const data = await Global.find();
        res.json(data);
});


app.get('/country', async function(req, res){
    try{
    if(!req.body) throw new Error("faltan campos");
    const {body} = req;
    if(!body.countries) throw new Error("faltan campos");; 
    const {countries} = body;
    const dataCountries = [];
    for(let i = 0; i < countries.length; i++){
        const response = await Country.findOne(
            {$or: [
                {name: countries[i].name},
                {cod: countries[i].cod}
            ]}
            );
        if(response) dataCountries.push(response);
    }
    res.json(dataCountries);
    }catch(err){
        res.json({"error": "faltan campos"});
    }
});

app.get('/update', async function(_,res){
    const dataGlobal = await consultGlobal();
    await updateGlobal(dataGlobal);
    dataGlobal.countries.forEach(async (c) => {
        const dataCountry = await consultCountry(c);
        await updateCountry(dataCountry);
    })
    
    res.send('Actualizado');
})

app.listen(port);