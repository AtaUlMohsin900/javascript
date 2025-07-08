// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);

// Standard IEEE 754
if (0.1 + 0.2 === 0.3) {
    console.log(true);

} else {
    console.log(false);

}

// 2 Question find the problem (interview in Walmart)

const users = {
    personOne: {},
    Mohsin: {}
}
        let name ='constructor';
        // name comes from input text
        // if(users[name]) {
        //     console.log('BOSS');
           // let's fix it
        if(Object.hasOwn(users, name)) {

        }else{
                console.log('NOT BOSS');
                
        }
 