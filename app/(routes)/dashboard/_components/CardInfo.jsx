import { PiggyBank, ReceiptText, Wallet } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import BudgetList from '../budgets/_components/BudgetList'

function CardInfo({budgetList}) {

    const [totalBudget,setTotalBudget]=useState(0);
    const [totalSpend,setTotalSpend]=useState(0);
    useEffect(()=>{
        budgetList&&CalculateCardInfo();
    },[budgetList]);

    const CalculateCardInfo=()=>{
       
        let totalBudgetAmount=0;
        let totalSpendAmount=0;

        if (!Array.isArray(budgetList)) return;

        budgetList.forEach((element) => {
            totalBudgetAmount+=Number(element.amount || 0);
            totalSpendAmount+=Number(element.totalSpend || 0);
            });

            setTotalBudget(totalBudgetAmount);
            setTotalSpend(totalSpendAmount);

            console.log(totalBudgetAmount,totalSpendAmount);
    };
  return (
    <div>
    {budgetList?.length>0?
   
    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
                <h2 className='text-sm'>Total Budget</h2>
                <h2 className='font-bold text-2xl'>₹{totalBudget}</h2>
            </div>

            <PiggyBank
            className='bg-primary p-3 h-12 w-12 rounded-full text-white'/>
        </div>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
                <h2 className='text-sm'>Total Spend</h2>
                <h2 className='font-bold text-2xl'>₹{totalSpend}</h2>
            </div>
            <ReceiptText
            className='bg-primary p-3 h-12 w-12 rounded-full text-white'/>
        </div>
        <div className='p-7 border rounded-lg flex items-center justify-between'>
            <div>
                <h2 className='text-sm'>No. Of Budget</h2>
                <h2 className='font-bold text-2xl'>{Array.isArray(budgetList) ? budgetList.length : 0}</h2>
            </div>
            <Wallet
            className='bg-primary p-3 h-12 w-12 rounded-full text-white'/>
        </div>
    </div>
    :
    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        { [1,2,3].map((item,index)=>(
            <div key={index} className='h-[110px] w-full bg-slate-200 animate-pulse rounded-lg'>

            </div>

        ))}
    </div>
    }

    
    </div>
  )
}

export default CardInfo