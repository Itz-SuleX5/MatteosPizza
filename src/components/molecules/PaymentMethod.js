import { React, useState } from 'react';
import Button from '../atoms/Button';
import MoneyIcon from '@mui/icons-material/Money';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Radio from '@mui/material/Radio';
import { red } from '@mui/material/colors';

const PaymentMethod = ({step, onClickBack, onClickContinue}) => {
    const [selected, setSelected] = useState("efectivo");

    return (
    <div className='flex flex-col mx-auto w-full gap-2'>
        <h1 className='text-xl font-medium my-4'>Metodo de pago</h1>
        <div className='flex items-center border border-gray-400 w-full px-3 py-1 rounded gap-2 justify-center m-auto items-center'>
            <MoneyIcon/>
            <h2>Efectivo</h2>
            <Radio className='ml-auto' name='payment-method'
            checked={selected === 'efectivo'}
                    onChange={() => setSelected('efectivo')}
                sx={{
                    color: '#bdbdbd',
                    '&.Mui-checked': {
                    color: red[500],
                    },
                }}
            />
        </div>
        <div className='flex items-center border border-gray-400 w-full px-3 py-1 rounded gap-2 justify-center m-auto items-center'>
            <CreditCardOutlinedIcon/>
            <h2>Tarjeta de Credito</h2>
            <Radio className='ml-auto' name='payment-method' checked={selected === 'tarjeta'}
                    onChange={() => setSelected('tarjeta')}
                sx={{
                    color: '#bdbdbd',
                    '&.Mui-checked': {
                    color: red[500],
                    },
                }}
            />
        </div>

        <div className='flex items-center border border-gray-400 w-full px-3 py-1 rounded gap-2 justify-center m-auto items-center'>
            <CurrencyBitcoinIcon/>
            <h2>Bitcoin</h2>
            <Radio className='ml-auto' name='payment-method' checked={selected === 'bitcoin'}
                    onChange={() => setSelected('bitcoin')}
                sx={{
                    color: '#bdbdbd',
                    '&.Mui-checked': {
                    color: red[500],
                    },
                }}
            />
        </div>
            
        <div className="flex py-4">
            <Button onClick={onClickBack}>Atras</Button>
            <Button className="ml-auto" onClick={onClickContinue}>Continuar</Button>
        </div>
    </div>
);
};

export default PaymentMethod;