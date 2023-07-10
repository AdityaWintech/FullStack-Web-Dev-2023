function extractNameAndStreet({ name, address: { street } }) {
    return { name, street };
}

const person = {
    name: "Aditya Kumar",
    age: 19,
    address: {
        street: "Ganga Nagar Harmu Ranchi Jharkhand",
        city: "Ranchi",
        state: "Jharkhand"
    }
};

const { name, street } = extractNameAndStreet(person);
console.log(name);    // "Aditya"
console.log(street);  // "Ganga Nagar Harmu Ranchi Jharkhand"
