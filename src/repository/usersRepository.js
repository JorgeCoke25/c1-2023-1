import dataset from '../dataset/users_info.json'
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

exports.getUsersFromDataset =()=> {
    return datasets
}

exports.OrderUserActiveByName=(name)=>{
    let aux = [];
    dataset.forEach(user =>{
        if((user.name.toLowerCase()).includes(name.toLowerCase()) && user.isActive){
            aux.push(user);
        }
    })
    aux.sort((a,b)=> b.age - a.age);
    return aux;
}

exports.findUsersByParameters=(age,name,gender,company,status)=>{
    let result=[];
    dataset.forEach(user =>{
        if(((user.age) === age || age===undefined) && ((user.name).toLowerCase() === name?.toLowerCase() || name=== undefined) && ((user.gender).toLowerCase() === gender?.toLowerCase() || gender===undefined) && ((user.company).toLowerCase() === company?.toLowerCase() || company=== undefined) && ((user.isActive) === status || status===undefined)){
            result.push(user)
        }
    })
    return result
}
