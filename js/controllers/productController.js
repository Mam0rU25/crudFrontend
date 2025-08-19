import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../services/productService.js";
 
import { getCategories } from "../services/categoryService.js";
 
import { uploadImageToFolder } from "../services/imageService.js";
 
let currentPage = 0;
let currentSize = 10;
 
//Todo el contenido irá aquí
document.addEventListener("DOMContentLoaded", () => {
 
    //Referencias a elementos del DOM
    const tableBody = document.querySelector("#itemsTable tbody");
    const form = document.getElementById("productForm");
    const modal = new bootstrap.Modal(document.getElementById("itemModal"));
    const modalLabel = document.getElementById("itemModalLabel");
    const btnAdd = document.getElementById("btnAdd");
    const select = document.getElementById("productCategory");
 
});