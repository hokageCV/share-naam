import { SECONDARY, CARD_BG } from "../../Constants/Constants"
export const BoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background',
  border: '5px solid black',
}

export const CardStyle = {
  backgroundColor: CARD_BG,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
  boxShadow: "5px 6px 4px #b58500"
}

export const CardContentStyle ={
  color: SECONDARY,
}
export const EditButtonStyle = {
  position: 'absolute',
  top: '5px',
  right: '5px',
  color: 'black',
}

export const CardActionsStyle = {
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  color: SECONDARY
}

