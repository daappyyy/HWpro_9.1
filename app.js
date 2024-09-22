let company = {
    sales: [{name: 'John', salary: 1000}, 
            {name: 'Alice', salary: 600}],

    development: {
        web:  [{name: 'Peter', salary: 2000}, 
               {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
        }
};

function salariesSum(department){
    let result = 0;

    for (let key in department){
        const item = department[key];
        if(item.length !== undefined){                  //todo Array.isArray()
            for(let i = 0; i < item.length; i++){
                result += item[i].salary;
            }
        }else{
            result += salariesSum(item);
        }
    }
    return result;
}

let resultSalary = salariesSum(company);
console.log(`Sum of salaries is ${resultSalary}`);