function add(a,b){
    return a + b;
}
const add1=(a,b) => {
    return a * b;
}
console.log(add(8,15));
console.log(add1(5,3));

const num=[1,2,3,4,5]
const mapnum=num.map((n)=>n*3)
console.log(mapnum)

const postnum=num.filter((n)=>n%2!=0)
console.log(postnum)

const total=num.reduce((sum,n)=>sum+n,0)
console.log(total)

const products=[
    {name:'laptop',price:50000},
    {name:'phone',price:15000},
    {name:'tv',price:45000}
]
const totprice=products.reduce((sum,n)=>sum+n.price,0)
console.log(totprice)

const filterp=products.filter((p)=>p.price<30000)
console.log(filterp)


const [first,second,third,...spread]=num
console.log(third);
const user ={Uname:'CR7',password:'12345'}
const {uname,password}=user
console.log(password);
console.log(spread);

function add2(...arguments){
    //return arguments;
    return arguments.reduce((sum,n)=>sum+n,0);
}
console.log(add2(1,2,3,4,5))

function function1(){
    console.log(`from inside callback`)
}
    function fun(name,callback){
    callback()
    return  `${name} from outside callback`
}
console.log(fun(`function`,()=>{console.log(`from inside callback`) }));

async function fetchUsers() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const data = await response.json();
    //console.log(data);
    data.map((a)=>console.log(a.name));
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();
