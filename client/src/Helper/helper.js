// export const fetchProductData = async () => {
//   try {
//     const data = await fetch(process.env.REACT_APP_KEY);
//     const jsonData = await data.json();
//     return jsonData;
//   } catch (error) {
//     console.log(error);
//   }
// };

export function overallPrice(cartProduct) {
  return cartProduct.reduce((acc, val) => acc + Number(val.totalPrice), 0);
}
export function overallDiscount(cartProduct) {
  return cartProduct.reduce((acc, val) => acc + Number(val.discountPrice), 0);
}

export function productCategory(data) {
  console.log(data);
  data &&
    data.reduce((group, product) => {
      const { Status } = product;
      group[Status] = group[Status] ?? [];
      group[Status].push(product);
      return group;
    }, {});
}
