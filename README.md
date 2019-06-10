This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Description :

Hi, I have used create react app and Material UI in this project. The project consist of data.json file which has products which NoviCap is selling on its store and can be edited. Json has all the details of individual product, and currency.

Since, on browser, I am not able to produce scan from device. Hence, I have used keyboard keys to trigger event which could be same as scan event. I have assigned codes to each keyboard key, where "j" key holds code for Voucher, "k" key holds code for mug and "l" key holds code for Tshirt.

Hence, when you click on the bar and press any of these keys, it would add the item to the list and show the total infront of Total: Step 1 : Click on the bar which says "Click here to start scanning". Step 2 : Press key assigned to the Product code, to scan.

If it matches, it will be added in the list. If not it will not.

The logic for discounts on Tshirt is that whenever the count of Tshirts is more than 3, it would remove $1 from each which is total sum of all minus total number of Tshirts.

The logic for discounts on Voucher is that whenever count of voucher is multiple of Two, the discount would be 50% i.e Sum divided by two. else if it is not the number of voucher would be incremented by one and divided by two automatically.
