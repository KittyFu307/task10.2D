import faker from 'faker'
const Tasklist=[]
for(var i = 0;i<3;i++){
    Tasklist.push({
        "id":i,
        "title":faker.name.findName(),
        "description":faker.name.jobTitle(),
        "expiryDate":"2020-11-25",
        "type":"sentence",
        "requireMW":"Yes",
        "reward":"5000",
        "number":15,    
    })
}
for(var i = 3;i<6;i++){
    Tasklist.push({
        "id":i,
        "title":faker.name.findName(),
        "description":faker.name.jobTitle(),
        "expiryDate":"2020-12-07",
        "type":"Choice",
        "requireMW":"No",
        "reward":"1500",
        "number":3,    
    })
}

export default Tasklist