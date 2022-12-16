import { SECONDARY, SURFACE, ERROR_RED } from "../../Constants/Constants"

export const PaperStyle =  {
    marginTop: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2px',
    backgroundColor: SURFACE
}

export const AvatarStyle = {
    margin: '1px',
    backgroundColor: SECONDARY,
}

export const FormStyle = {
    width: '100%', 
    marginTop: '3px',
}

export const ButtonStyle = {
    margin: '10px 0px',
}

export const ErrorStyle = {
    padding: '10px',
    color: ERROR_RED,
    borderRadius: '4px',
    margin: '20px 0',
    fontSize: 'x-small'
}