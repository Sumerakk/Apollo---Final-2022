import { Grid, Button, Container} from '@mui/material'
import { styled, useTheme } from '@mui/system'
export const  StyledButton = styled(Button)(({ theme }) => ({
    margin: '5px',
    paddingLeft: '24px',
    paddingRight: '24px',
    overflow: 'hidden',
    borderRadius: '20px',
    transition: 'all 250ms',
    color: 'primary',
    height: '30px',
    '&.yesBtn': {
        '&:hover': {
            color: '#ffffff',
            background: `${theme.palette.primary.main} !important`,
            backgroundColor: `${theme.palette.primary.main} !important`,
            fallbacks: [{ color: 'white !important' }],
        }
    },
    '&.noBtn': {
        '&:hover': {
            color: '#ffffff',
            background: `${theme.palette.secondary.main} !important`,
            backgroundColor: `${theme.palette.secondary.main} !important`,
            fallbacks: [{ color: 'white !important' }],
        }
    },
}))