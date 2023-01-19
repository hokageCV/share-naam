import { SECONDARY, CARD_BG } from "../../Constants/Constants"

const styles = {
  BoxStyle : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background',
    border: '5px solid black',
  },

  CardStyle : {
    backgroundColor: CARD_BG,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    boxShadow: "5px 6px 4px #b58500",

    "&:hover":{ boxShadow: "8px 9px 7px #b58500", borderRadius: '20px' }
  },

  CardMediaStyle:{
    height: '240px',
    backgroundPosition: 'center center/cover',

    // width: '200px',
    // height: '300px',
    // objectFit: 'cover',

    cursor: 'pointer'
  },

  CardContentStyle :{
    color: SECONDARY,
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    // border: '5px solid black',

  },

  EditButtonStyle : {
    position: 'absolute',
    top: '5px',
    right: '5px',
    color: 'black',
  },

  CardActionsStyle : {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    color: SECONDARY
  }
}
export default styles;










