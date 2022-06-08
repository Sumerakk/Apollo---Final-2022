import { Grid, Button, Container} from '@mui/material'
import { styled, useTheme } from '@mui/system'
export const SearchButton = styled(Button)(({ theme }) => ({
    margin: '30px',
    paddingLeft: '20px',
    paddingRight: '24px',
    overflow: 'hidden',
    borderRadius: '10px',
    transition: 'all 250ms',
    height: '30px',
    color: 'primary',
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