import React from 'react';
import './index.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function DropDown() {
    return (
            <div className='DropDown'>
                <Select>
                    <MenuItem value ={10}>TEN</MenuItem>
                </Select>
            </div>
    );
}