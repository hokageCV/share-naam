const styles = {
  outerBox: {
    margin: '10px', 
    boxShadow: '5px'
  },     
  infoPart: {
    padding: '10px'
  },
  capital:{
    textTransform: 'capitalize'
  },
  title:{
    textTransform: 'capitalize',

    '&:hover':{
      '-webkit-text-stroke': '1px red' 
    }
  }
}

export default styles;