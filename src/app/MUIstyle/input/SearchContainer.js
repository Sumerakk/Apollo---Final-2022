import { styled, useTheme } from '@mui/system'
import { topBarHeight } from 'app/utils/constant'
export const SearchContainer = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: topBarHeight,
    background: theme.palette.primary.main,
    color: theme.palette.text.primary,
    '&::placeholder': {
        color: theme.palette.text.primary,
    },
}))
