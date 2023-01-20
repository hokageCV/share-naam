import { SECONDARY, CARD_BG } from "../../Constants/Constants"

const styles = {
  box : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background',
    border: '5px solid black',
  },

  card : {
    backgroundColor: CARD_BG,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    boxShadow: "5px 6px 4px #b58500",

    "&:hover":{ 
      boxShadow: "8px 9px 7px #b58500", 
      borderRadius: '20px' ,

      transform: 'scale(1.05)',
    }
  },

  cardMedia:{
    height: '240px',
    backgroundPosition: 'center center/cover',

    // width: '200px',
    // height: '300px',
    // objectFit: 'cover',

    cursor: 'pointer'
  },

  cardContent :{
    color: SECONDARY,
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
  },

  editButton : {
    position: 'absolute',
    top: '5px',
    right: '5px',
    color: 'black',
  },

  cardActions : {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    color: SECONDARY
  },

  cardHeader:{
    userSelect: 'none',
  }
}
export default styles;










