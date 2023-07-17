const saveProducts = require("../models/saveProductsModels");
const products = require("../models/productModels");

// const saveProduct = async (req, res) => {
//   const { userId, productId, ImgUrl, templateName, categoryName, price } =
//     req.body;
//   try {
//     const productSaved = await saveProducts.findOne({ userId: userId });

//     if (productSaved) {
//       let savedlist = [];
//       console.log(productSaved);
//       productSaved.savingList.forEach((item) => {
//         savedlist.push(item);
//       });

//       if (!savedlist.includes(productId)) {
//         savedlist.push(productId, ImgUrl, templateName, categoryName, price );
//         let savedlistArray = {
//           savingList: savedlist,
//         };

//         const updatedList = await saveProducts.updateOne(
//           productSaved,
//           savedlistArray,
//           { new: true }
//         );
//         console.log(updatedList);
//         return res
//           .status(200)
//           .json({
//             success: true,
//             statusCode: 200,
//             message: "updated successfully",
//             data: productSaved,
//           });
//       } else {
//         return res
//           .status(404)
//           .json({ success: false, statusCode: 300, message: "Already saved" });
//       }
//     } else {
//       const data = {
//         userId: userId,
//         savingList: {
//           productId: productId,
//           ImgUrl: ImgUrl,
//           templateName: templateName,
//           categoryName: categoryName,
//           price: price
//         },
//       };
//       const saveProduct = await saveProducts.create(data);
//       console.log(saveProduct);

//       return res
//         .status(200)
//         .json({
//           success: true,
//           statusCode: 200,
//           message: "Product saved successfully",
//           dataObject:saveProduct
//         });
//     }
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ success: false, statusCode: 500, message: err.message });
//   }
// };

const saveProduct = async (req, res) => {
    const { userId, productId, ImgUrl, templateName, categoryName, price } =
      req.body;
    try {
      const productSaved = await saveProducts.findOne({ userId: userId });
  
      if (productSaved) {
        // Check if the product is already saved
        const existingProduct = productSaved.savingList.find(
          (item) => item.productId === productId
        );
  
        if (!existingProduct) {
          // If the product is not already saved, add it to the savingList array
          productSaved.savingList.push({
            productId: productId,
            ImgUrl: ImgUrl,
            templateName: templateName,
            categoryName: categoryName,
            price: price,
          });
  
          const updatedProduct = await productSaved.save();
          
  
          return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Product updated successfully",
            dataObject: updatedProduct,
          });
        } else {
          return res
            .status(404)
            .json({ success: false, statusCode: 300, message: "Already saved" });
        }
      } else {
        // If the user's saveProducts document doesn't exist, create a new one
        const data = {
          userId: userId,
          savingList: [
            {
              productId: productId,
              ImgUrl: ImgUrl,
              templateName: templateName,
              categoryName: categoryName,
              price: price,
            },
          ],
        };
        const saveProduct = await saveProducts.create(data);
  
        return res.status(200).json({
          success: true,
          statusCode: 200,
          message: "Product saved successfully",
          dataObject: saveProduct,
        });
      }
    } catch (err) {
      return res
        .status(500)
        .json({ success: false, statusCode: 500, message: err.message });
    }
  };
  

const getsavedProduct = async (req, res) => {
  const { userId} = req.query;
  try {
    const savedProduct = await saveProducts.findOne({ userId });

    return res
      .status(200)
      .json({
        success: true,
        statusCode: 200,
        message: "All saved products",
        dataObject: savedProduct,
      });
  } catch (err) {
    return res
      .status(404)
      .json({ success: false, statusCode: 404, message: err.message });
  }
};

module.exports = { saveProduct, getsavedProduct };
