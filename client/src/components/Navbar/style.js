import { ERROR_RED, PRIMARY } from "../../Constants/Constants"

const styles = {
  formBox : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background',
    border: '5px solid black',
    m:4
  },
  appBar : {
    color: PRIMARY,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    position: 'static',

    "@media(max-width:800px)":{
      display: 'flex',
      flexDirection: 'column',
    }
  },
  heading : {
    color: 'black',
    ml:2,

    userSelect: 'none',
  },
  userName:{
    textTransform: 'capitalize',

    "&:hover":{
      textDecoration: 'underline wavy'
    }
  },
  toolbar : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  brandContainer : {
    alignItems: 'center',
  },
  profile : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoutBtn : {
    height: '50px',
    margin: '10px',

    '&:hover':{
      color: ERROR_RED,
      borderColor: ERROR_RED
    }
  }
}

export default styles;