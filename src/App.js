import React from 'react';
import DataJSON from './data.json';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const currency = DataJSON.currency;
const j = "VOUCHER";
const l = "TSHIRT";
const k = "MUG";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    height: '100%',
  },
  body:{
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36

  },
  headerMessage:{
    height: '10%',
    textAlign: 'center',
    alignItem: 'center',
    lineHeight: '10px;'
  },
}));
class App extends React.Component {
  constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = {
    items: []
  }
  this.total = this.total.bind(this);
}

total(){

  let tee = 0;
  let mug = 0;
  let voucher= 0;
  let teePrice = 0;
  let voucherPrice = 0;
  let mugPrice = 0;

  for (var i = 0; i < this.state.items.length; i++) {
    if (this.state.items[i].code === j) {
      voucher +=1;
        if (voucher % 2 === 0 && voucher !== 1) {
          voucherPrice  = (this.state.items[i].price * voucher )/ 2;
        }else {

          voucherPrice  = (this.state.items[i].price * (voucher+1) )/ 2;

        }
    }
    else if (this.state.items[i].code === l) {
      tee +=1;
      if (tee>=3) {
     teePrice  = (this.state.items[i].price * tee ) - tee
      }
      else {
        teePrice  = (this.state.items[i].price * tee )
      }
    }
    else if (this.state.items[i].code === k) {
      mug +=1;
      mugPrice  = (this.state.items[i].price * mug )
    }
  }
  return (parseFloat(teePrice) + parseFloat(voucherPrice) + parseFloat(mugPrice)).toFixed(2);
}

remove(item){

  let arr = this.state.items;
  arr.splice(item, 1)
  this.setState({items: arr});

}

handleclick(e){
 for (var i = 0; i < DataJSON.products.length; i++) {

if (e.key === "j" && DataJSON.products[i].code === j ) {
  let arr = this.state.items;
  arr.push(DataJSON.products[i]);
  this.setState({items: arr});
  break;
}
else if (e.key === "l" && DataJSON.products[i].code === l ) {
  let arr = this.state.items;
  arr.push(DataJSON.products[i]);
  this.setState({items: arr});
  break;
}
else if (e.key === "k" && DataJSON.products[i].code === k ) {
  let arr = this.state.items;
  arr.push(DataJSON.products[i]);
  this.setState({items: arr});
  break;
}
else{
  console.log("Product Not Match");
}

 }

}

itemData(){
  return this.state.items.map((data,index) =>
    <TableRow  key={index} >
      <TableCell>{index+1}</TableCell>
      <TableCell align="right">{data.name}</TableCell>
      <TableCell align="right">{data.code}</TableCell>
      <TableCell align="right">{currency} {data.price}</TableCell>
      <TableCell align="right"><a onClick={() => this.remove(index) }>Remove</a></TableCell>
    </TableRow>

  )
}

componentDidMount(){
  console.log("mount");
}
  render() {

    return (
<div >
<div className={useStyles.headerMessage} tabIndex="1" onKeyPress={(e) => this.handleclick(e)}>
<AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Click here to start scanning
          </Typography>
        </Toolbar>
      </AppBar>
</div>
<Paper className={useStyles.root}>
  <Table  className={useStyles.table}>
    <TableHead>
      <TableRow>
        <TableCell>Desc</TableCell>
        <TableCell align="right">Name.</TableCell>
        <TableCell align="right">@</TableCell>
        <TableCell align="right">Price</TableCell>
        <TableCell align="right">Action</TableCell>

      </TableRow>
    </TableHead>
    <TableBody  >


    {this.itemData()}

    </TableBody>
    <TableBody className={useStyles.body}>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell align="right">{currency} {this.total()}</TableCell>
      </TableRow>
      </TableBody>
  </Table>
</Paper>

</div>
    );
  }
}

export default App;
