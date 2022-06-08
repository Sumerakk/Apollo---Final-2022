import { styled, useTheme } from '@mui/system'
import { topBarHeight } from 'app/utils/constant'
export const SearchInput = styled('input')(({ theme }) => ({
    width: '25%',

    outline: '',
    fontSize: '1rem',
    paddingLeft: '20px',
    borderRadius: '10px',
    borderColor: "secondary",
    height: '30px',

    color: theme.palette.text.primary,
    '&::placeholder': {
        color: theme.palette.text.info,
    },
}))