import { User, add, Util, Product } from 'mylib';

export function doSum() {
  const result = add(1, 2);
  console.log(result, 3);
}
doSum();

export function checkEqual() {
  const result = Util.equal('1', '3');
  console.log(result);
}
checkEqual();

function logUser() {
  const user = {
    name: 'rupesh',
    dob: new Date(),
  } as User;
  console.log('user', user);
}
logUser();

function createProduct() {
  const product = new Product('pen');
  console.log('product', product);
}
createProduct();
