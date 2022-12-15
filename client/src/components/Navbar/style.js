import { PRIMARY } from "../../Constants/Constants"

export const FormBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background',
  border: '5px solid black',
  m:4
}

export const AppBarStyle = {
  color: PRIMARY,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  position: 'static'
}

export  const HeadingStyle = {
  color: 'black',
  ml:2
}

export const ToolbarStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  // width: '400px',
}

export const BrandContainerStyle = {
  // display: 'flex',
  alignItems: 'center',
}

export const ProfileStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
  // width: '400px',
}

export const LogoutBtnStyle = {
  height: '50px',
  margin: '10px'
}