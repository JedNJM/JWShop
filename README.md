# JWShop
 Full commercial e-commerce website to sell

SETUP

    Clone the repo and cd into it "git clone apilink"
    composer install
    Rename or copy .env.example file to .env
    php artisan key:generate
    Set your database credentials in your .env file
    Set your Braintree credentials in your .env file if you want to use PayPal
    Import db file(database/e-shop.sql) into your database (mysql,sql)
    npm install
    npm run watch
    run command[laravel file manager]:- php artisan storage:link
    Edit .env file :- remove APP_URL
    php artisan serve or use virtual host
    Visit localhost:8000 in your browser
    Visit /admin if you want to access the admin panel. Admin Email/Password: admin@gmail.com/1111. User Email/Password: user@gmail.com/1111

Advance E-commerce website in Laravel 7
Setup video : https://www.youtube.com/watch?v=URX5D1A5XQ4&t=19s
Demo video :

https://youtu.be/c5a_wrvJSJo
Full tutorial :

https://www.youtube.com/watch?v=FdAMucaks64&list=PLIFG3IUe1Zxo8Zvju3_kJJvoKSaIP_SC_&index=1&t=44s
Features :

====== FRONT-END =======

    Responsive Layout
    Shopping Cart, Wishlist, Product Reviews
    Coupons & Discounts
    Product attributes: cost price, promotion price, stock, size...
    Blog: category, tag, content, web page
    Module/Extension: Shipping, payment, discount, ...
    Upload manager: banner, images,..
    SEO support: customer URL
    Newsletter management
    Contact forms with the real-time notification (Laravel Pusher)
    Related Products, Recommendations for you in our categories
    A Product search form
    Laravel Socialite implement(Facebook, Google & twitter) & Customer login
    Product Share and follow from different social platform...
    Payment integration(Paypal)
    Order Tracking system
    Multi-level comment system many more......

======= ADMIN =======

    Admin roles, permission
    Product manager
    Media manager using unisharp laravel file manager
    Banner manager
    Order management
    Category management
    Brand management
    Shipping Management
    Review Management
    Blog, Category & Tag manager
    User Management
    Coupon Management
    System config: email setting, info shop, maintain status,...
    Line Chart & Pie chart ...
    Generate order in pdf form...
    Real time message & notification
    Profile Settings Many more....

======= USER DASHBOARD =======

    Order management
    Review Management
    Comment Management
    Profile Settings
