function Product() {
    this.id;
    this.name;
    this.price;
    this.pictures;
}


let product1 = new Product();
let product2 = new Product();
let product3 = new Product();
let product4 = new Product();
let product5 = new Product();
let product6 = new Product();
let product7 = new Product();
let product8 = new Product();

product1.id = '1';
product1.name = 'Black Tiered Smock Mini Dress'
product1.price = '$50.00'
product1.pictures = ['img/black_tiered_smock_mini_dress_1_646eba4d-9725-4223-b764-3e0b0fbffad7_720x.jpg', 'img/black_tiered_smock_mini_dress_2_5a5c56c7-94dd-490e-89a4-35f38fa8a73f_720x.jpg']
product2.ID = 2;
product2.pictures = ['img/rust_high_neck_frill_smock_dress_1_7d4bde97-dc7d-4e9b-949a-bca85eef3dd5_720x.jpg','img/rust_high_neck_frill_smock_dress_2_1183ccc0-389e-441a-8bef-dd08f9aa7373_720x.jpg']
product2.name = 'Rust High Neck Frill Smock Dress'
product2.price = '$149.00'
product3.ID = 3;
product3.pictures = ['img/blue_denim_pleated_tennis_skirt_1_2730c700-263d-4de1-8b56-cc82099870b9_720x.jpg','img/blue_denim_pleated_tennis_skirt_2_9ed9b775-1f3e-4b55-a86c-7cdb639eee18_720x.jpg']
product3.name = 'Blue Denim Pleated Tennis Skirt'
product3.price = '$100.00'
product4.ID = 4;
product4.pictures = ['img/blue_ditsy_floral_high_neck_mini_dress_1_de949aa4-709a-4141-a2eb-064ed1d73d45_720x.jpg','img/blue_ditsy_floral_high_neck_mini_dress_2_6758e398-61c1-4d69-a2f8-d14d1afbc136_720x.jpg']
product4.name = 'Blue Ditsy Floral High Neck'
product4.price = '$240.00'
product5.ID = 5;
product5.pictures = ['img/blue_floral_mini_smock_dress_1_720x.jpg','img/blue_floral_mini_smock_dress_2_720x.jpg']
product5.name = 'Blue Floral Mini Smock Dress'
product5.price = '$115.00'
product6.ID = 6;
product6.pictures = ['img/blue_overdyed_munich_logo_t_shirt_1_75a48775-5bf9-4d1e-b0e2-fd4210e87538_720x.jpg','img/blue_overdyed_munich_logo_t_shirt_2_105025bf-89e0-4d99-aa88-1e266cad0d5c_720x.jpg']
product6.name = 'Blue Overdyed Munich Logo T Shirt'
product6.price = '$340.00'
product7.ID = 7;
product7.pictures = ['img/red_atlanta_georgia_logo_sweatshirt_1_beff9798-ef5a-4ba8-bd9e-6dc32447eb6b_720x.jpg','img/red_atlanta_georgia_logo_sweatshirt_2_8212b152-7415-436d-878a-6a75ec5832d7_720x.jpg']
product7.name = 'Red Atlanta Georgia Logo Sweatshirt'
product7.price = '$49.00'
product8.ID = 8;
product8.pictures = ['img/stone_pique-collared_zip_front_polo_top_1_720x.jpg','img/stone_pique-collared_zip_front_polo_top_2_720x.jpg']
product8.name = 'Stone Pique Collared Zip Front P...'
product8.price = '$95.00'

let allProducts = [product1,product2,product3,product4,product5,product6,product7,product8]

localStorage.products = JSON.stringify(allProducts);