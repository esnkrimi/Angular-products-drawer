Products Boards that will get data and show products on a luxury format

----------------------------DEMO

        https://products-drawer.stackblitz.io

        https://stackblitz.com/edit/products-drawer

For example :

https://www.burjcrown.com/

----------------------------INSTALLATION

        npm i products-drawer --force

        and in app.module

        import {ProductsDrawerModule } from 'products-drawer'

----------------------------NOTE

 At first you should install font awsome , httClient and bootstrap !


 

----------------------------USAGE

---------------------------HTML FILE

        <products-drawer 
        [data]="data">
        </products-drawer>

---------------------------TS FILE

        data = {
            info: [
            {
                wishlist: true,
                key: 1,
                off: 10,
                f1: 'encre noire',
                f2: 'LALIQUE',
                f3: '',
                f4: 350,
            },
            {
                wishlist: false,
                key: 2,
                off: 20,
                f1: 'Lalique Ametys',
                f2: 'LALIQUE',
                f3: 'FRANCE',
                f4: 450,
            },
            {
                wishlist: true,
                key: 3,
                off: 10,
                f1: 'BIK',
                f2: 'BIK',
                f3: 'IRAN',
                f4: 200,
            },
            {
                wishlist: false,
                key: 4,
                off: 25,
                f1: 'Tuscan',
                f2: 'tomford',
                f3: 'FRANCE',
                f4: 800,
            },
            {
                wishlist: true,
                key: 5,
                off: 10,
                f1: 'Aljohar',
                f2: 'Alreza',
                f3: 'UAE',
                f4: 250,
            },
            {
                wishlist: false,
                key: 6,
                off: 45,
                f1: 'WM',
                f2: 'JOOP',
                f3: '',
                f4: 250,
            },
            {
                wishlist: true,
                key: 7,
                off: 10,
                f1: 'PARDON',
                f2: 'Black Afgano',
                f3: '',
                f4: 500,
            },
            {
                wishlist: false,
                key: 8,
                off: 0,
                f1: 'BA',
                f2: 'Black Afgano',
                f3: '',
                f4: 900,
            },
            {
                wishlist: true,
                key: 9,
                off: 10,
                f1: 'WomenPA',
                f2: 'Romansteel',
                f3: 'ITALY',
                f4: 150,
            },
            {
                wishlist: true,
                key: 10,
                off: 0,
                f1: 'BGAtrHarbology',
                f2: 'Harbology',
                f3: '',
                f4: 180,
            },
            {
                wishlist: true,
                key: 11,
                off: 10,
                f1: 'andreas',
                f2: 'ALTOKAD',
                f3: 'JAPAN',
                f4: 250,
            },
            {
                wishlist: true,
                key: 12,
                off: 5,
                f1: 'Catepilar',
                f2: 'GERMO',
                f3: '',
                f4: 150,
            },
            {
                wishlist: true,
                key: 13,
                off: 10,
                f1: 'Fantasy',
                f2: 'Rojohan',
                f3: '',
                f4: 500,
            },
            {
                wishlist: true,
                key: 14,
                off: 5,
                f1: 'andreas',
                f2: 'Schmit',
                f3: 'Swiss',
                f4: 200,
            },
            {

                wishlist: true,
                key: 15,
                off: 25,
                f1: 'Faranhayt',
                f2: 'Alazim',
                f3: 'UAE',
                f4: 500,
            },
            ],

            //If off is between 1 and 40 Off will be orange 
            //If off is greater than 40 Off will be 
            //green and border will be displayed 


            imagePrefix: 'https://www.burjcrown.com/drm/users/1',
            imagePostfix: '/1.jpg',
            //Image will be : imagePrefix+key+imagePostfix

            wishlistApi: 'https://www.burjcrown.com/drm/web/index.php?id=44&do_id=',
            //API will call whenever user click on heart icon(add to wishlist/remove from wishlist)

            destinationUrlPrefix: 'https://www.burjcrown.com/zoom/',
            //Link will routes whenever user click on Items

            wishlistIconColor: '#67c968',
            columnClass:'col-md-3'//Number of columns per line
        }