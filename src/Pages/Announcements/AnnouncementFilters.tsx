import { useEffect, useState } from 'react';
import ValidateWage from '../../utils/Validate/Wage.validate';
import Form from "../../Components/Form";

/* TODO: 
    Input for selecting tags with autocomplete
    Checkboxes for selecting required experience.  But in no case let user choose required experience higher than his real experience.
    Error page to show incase we can't find any posts with selected tags      
*/ 
export default function AnnouncementFilters(): JSX.Element {
    const [minWageVal,  setMinWage] = useState('');
    const [maxWageVal,  setMaxWage] = useState('');

    useEffect(() => {
        const inputElements = [document.getElementById('min-wage'), document.getElementById('max-wage')] as HTMLInputElement[];
       
        inputElements[0].addEventListener('change', () => {
            console.log(minWageVal);
            const val = ValidateWage([minWageVal, maxWageVal], {
                min: 3,
                max: 15
            });
            
            console.log(Object.values(val));
        })
    });
    // FIXME error handle with using error class  
    return <div className={'AnnouncementFilters'}>
        <Form id={'tags'} placeholder={'Tags like C++, Rust, Java, Laravel'} type="text" />
        <div id={'wage-range'}>
            <span className={'label'}>Wage</span> 
            <div className={'body'}>
                <span>From</span> <Form id="min-wage" type={'number'} min={10} max={10} value={minWageVal} onChange={setMinWage}/> 
                <span>To</span> < Form id="max-wage" type={'number'} min={10} max={10} value={maxWageVal} onChange={setMaxWage}/>
            </div>
        </div>
    </div>
}